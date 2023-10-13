import React from 'react';
import AuthContext from '@/providers/auth-context-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/login');
  }

  return (
    <>
      <ClerkProvider>
        <Navbar />
        {children}
        <Footer />
      </ClerkProvider>
    </>
  );
};

export default AuthLayout;
