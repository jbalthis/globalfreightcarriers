import React from 'react';
import { Session } from '@prisma/client';
import { getSession } from 'next-auth/react';

const AuthUserLayout = ({ children }: { children: React.ReactNode }) => {
  const session = getSession();

  if (!session) {
    console.log('no session found');
    return;
  }
  console.log(session);
  return <>{children}</>;
};

export default AuthUserLayout;
