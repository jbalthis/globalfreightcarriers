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

const PaymentsCard = () => {
  return (
    <Card className="w-[80%] border-none shadow-none my-8 mx-auto">
      <CardContent className="ml-4 flex md:flex-row flex-col justify-between gap-4">
        <div className="order-last">
          <CardHeader className="text-2xl font-semibold text-gray-800">
            Freight carrier payments
          </CardHeader>
          <CardDescription className="text-lg text-gray-500">
            Get paid easier and faster than ever. With some of the best carrier
            payment terms in the logistics industry, plus additional options to
            help you expedite every payment, we do everything we can to improve
            the payment process for you.
          </CardDescription>
          <CardFooter className="mt-8">
            <Button
              variant="outline"
              size="lg"
              className="text-md p-8 outline outline-1"
            >
              Explore payment options
            </Button>
          </CardFooter>
        </div>
        <Image
          src="/images/business.jpg"
          alt="tech"
          className="object-contain inline-block"
          width={450}
          height={450}
        />
      </CardContent>
    </Card>
  );
};

export default PaymentsCard;
