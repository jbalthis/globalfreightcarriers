import React from 'react';



interface PublicAuthLayoutProps {
  children: React.ReactNode;
}

const PublicAuthLayout: React.FC<PublicAuthLayoutProps> = ({ children }) => {
  return (
    <div>
     
      {children}
    
    </div>
  );
};

export default PublicAuthLayout;
