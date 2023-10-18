import React from 'react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  
  return (
    <>

        <Navbar />
        {children}
        <Footer />

    </>
  );
};

export default AuthLayout;
