import React from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
