import React from 'react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface PublicLayoutProps {
    children: React.ReactNode
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default PublicLayout