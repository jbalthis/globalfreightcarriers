import React from 'react';
import AuthContext from '@/providers/auth-context-provider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/login');
  }

  return <AuthContext session={session}>{children}</AuthContext>;
};

export default AuthLayout;
