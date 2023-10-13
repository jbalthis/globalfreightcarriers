import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import type { NextAuthOptions as NextAuthConfig } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import prisma from '@/lib/prismadb';

function isAuthenticated() {
  try {
    verifyToken();
    return true;
  } catch {
    return false;
  }
}

function verifyToken() {
  const token = cookies().get('authorization')?.value ?? '';
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const id = decoded.sub as string;
  return id;
}

export const useAuth = {
  isAuthenticated,
  verifyToken,
};

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, options);
}

export const options = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const _credentials = JSON.stringify(credentials);
        if (!credentials?.email || !credentials?.password) {
          console.log('CREDENTIALS: ' + _credentials);
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          console.log('Invalid credentials: bad password');
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }
        console.log('Authenticated: ' + JSON.stringify(user));
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token as string;
        token.id = profile?.id as string;
      }
      if (user) {
        token.userRole = user.role as string;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.access_token as string;
      session.user.id = token.userId as string;
      session.user.role = token.userRole as string;
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
