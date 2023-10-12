'use client';
import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdvantageCard = () => {
  return (
    <Card className="w-[80%] border-none shadow-none my-8 mx-auto">
      <CardContent className="ml-4 flex md:flex-row flex-col justify-between gap-4">
        <Image
          src="/images/office.jpg"
          alt="tech"
          className="object-contain inline-block"
          width={450}
          height={450}
        />
        <div className="order-last">
          <CardHeader className="text-2xl font-semibold text-gray-800">
            Carrier Advantage Program
          </CardHeader>
          <CardDescription className="text-lg text-gray-500">
            The Carrier Advantage Program gives reliable carriers access to the
            most loads, best payment terms, and unbeatable service. It pays to
            boost your status.
          </CardDescription>
          <CardFooter className="mt-8">
            <Button
              variant="outline"
              size="lg"
              className="text-md p-8 outline outline-1"
            >
              Explore benefits
            </Button>
          </CardFooter>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvantageCard;
