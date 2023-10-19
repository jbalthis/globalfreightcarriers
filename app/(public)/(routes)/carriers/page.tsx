import React from 'react';
import CarriersJumbotron from './components/carriers-jumbotron';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CarriersPage = () => {
  return (
    <div>
      <CarriersJumbotron />
      <section className="mb-32 mt-16 container">
        <Card className="max-w-[80%] my-32 mx-auto p-4">
          <CardHeader className="text-3xl font-semibold text-gray-800 text-center">
            Freight carrier solutions to drive your business
          </CardHeader>
          <Separator className="mb-4 mx-auto bg-blue-600 w-[150px] h-[3px]" />
          <CardContent className="text-gray-500 text-center">
            Find the right loads, make offers, book, and get paid with easy-to-use carrier tools that help you tackle everything your business requires.
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="mx-auto">Explore Carrier Technology</Button>
          </CardFooter>
        </Card>
   
  </section>
    </div>
  );
};

export default CarriersPage;
