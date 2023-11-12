'use client';
import React, { useState, useMemo } from "react";
import { useOrganizationList, useUser } from '@clerk/nextjs';



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { PackageCheck, DollarSign, Package } from "lucide-react";

import Overview from "@/components/overview";
import { getShipmentsByCustomerId } from '@/actions/get-shipments';


const DashboardPage = () => {
  
  const [role, setRole] = useState('');
  const [customerId, setCustomerId] = useState<string | undefined>('');
  const [shipments, setShipments] = useState([]);

  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });


  const memberships = userMemberships.data;
  const orgId = process.env.CUSTOMER_ORG_ID;
  useMemo(() => {
    memberships?.forEach((mem) => {
      if(mem.organization.id === orgId) {
        return setRole('CUSTOMER')
      }
    })
  },[memberships, orgId])


  const { user } = useUser();
  const username = (user) ? user?.username : '';
  useMemo(() => {
    if(username){
      return setCustomerId(username?.substring(2))
    }
  }, [username]);

  const _shipments = getShipmentsByCustomerId(customerId)
  console.log('_shipments '+JSON.stringify(_shipments));
  // useMemo(() => {
  //   return setShipments(_shipments)
  // }, [_shipments]);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description={user?.firstName} />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Shipping Expenditures
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                revenue
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Shipments</CardTitle>
              <PackageCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+count</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Shipments in Progress
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">count</div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview  data={{}}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
