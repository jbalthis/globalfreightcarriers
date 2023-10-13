import React from 'react';
import { Session } from '@prisma/client';
import { getSession } from 'next-auth/react';

const AuthAdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();

  if (!session) {
    console.log('no session found');
    return;
  }
  console.log('SESSION: ' + JSON.stringify(session));
  return <>{children}</>;
};

export default AuthAdminLayout;
