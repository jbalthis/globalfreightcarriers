import { auth, useOrganizationList } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

import prismadb from '@/lib/prismadb';
import Navbar from '@/components/navbar';
import { getAllShipments } from '@/actions/get-shipments';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  

  if (!userId) {
    redirect('/sign-in');
  }


  // const user = await prismadb.user.findFirst({
  //   where: {
  //     id: userId
  //   }
  // });

  //const shipments = getAllShipments();
  
  

  // if (!customer) {
  //   redirect('/');
  // }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
