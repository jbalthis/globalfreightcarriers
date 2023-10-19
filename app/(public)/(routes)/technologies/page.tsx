import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import TechnologiesJumbotron from './components/technologies-jumbotron';

const TechnologiesPage = () => {
  return (
    <div>
      <TechnologiesJumbotron />
        <section className="container my-32">
    <h1 className="my-2 text-3xl font-bold">
          End-to-end visibility
    </h1>

    <p className="mb-6 flex text-slate-400 items-center font-bold uppercase text-danger dark:text-danger-500">
          More than just identifying disruptions on your shipments, we’re helping to resolve them too.
    </p>

        <Card className="max-w-[80%] my-32 mx-auto p-4">
          <CardHeader className="text-3xl font-semibold text-gray-800 text-center">
            Carrier Technology
          </CardHeader>
          <Separator className="mb-4 mx-auto bg-blue-600 w-[150px] h-[3px]" />
          <CardContent className="text-gray-500 text-center">
            Instantly find and book the loads you want—we have more loads available online than any other provider. Plus, check driver and load status, manage documentation, create and process invoices, and keep all the details in check, all in one place. Get easy access to all the tools you need to help grow your business.
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="mx-auto">Explore Carrier Technology</Button>
          </CardFooter>
        </Card>
        <Card className="max-w-[80%] my-32 mx-auto p-4">
          <CardHeader className="text-3xl font-semibold text-gray-800 text-center">
            Shipper Technology
          </CardHeader>
          <Separator className="mb-4 mx-auto bg-blue-600 w-[150px] h-[3px]" />
          <CardContent className="text-gray-500 text-center">
            Build a best-in-class supply chain and solve your logistics challenges—from simple to complex—with our shipper technology solutions. Manage every aspect of the shipment lifecycle with Navisphere®, the most connected, flexible, and easiest to access platform. Plus, seamlessly tap into integrations with partners you already use.
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="mx-auto">Explore Shipper Technology</Button>
          </CardFooter>
        </Card>

      </section>
    </div>
  );
};

export default TechnologiesPage;
