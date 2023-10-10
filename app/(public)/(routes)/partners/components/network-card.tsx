'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const NetworkCard = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 bg-gray-200 w-full min-h-[600px] place-items-center">
      <Card className="w-[80%] border-none shadow-none bg-gray-200 my-8 mx-auto">
        <CardContent className="ml-4 flex sm:flex-row flex-col justify-between">
          <div className="object-last">
            <CardHeader className="text-4xl font-semibold text-gray-800">
              Join our network of freight carriers
            </CardHeader>
            <CardDescription className="text-lg text-gray-700">
              As a Global Freight Carriers&apos; freight carrier, you&apos;ll
              have access to more tools, resources, and loads than with any
              other provider in North America. We keep the registration process
              fast and easy, so you can get on the road quickly—with the loads
              and rates you like in less time
            </CardDescription>
            <CardFooter className="mt-8 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="text-md p-8 outline outline-1 bg-gray-200"
                onClick={() => router.push('/register')}
              >
                Sign up now
              </Button>
              <Button variant="ghost" className="text-lg bg-gray-200">
                Learn more
                <ArrowRightIcon width={30} height={30} />
              </Button>
            </CardFooter>
          </div>
          <Image
            src="/images/linked.png"
            alt="network"
            className="object-contain inline-block"
            width={500}
            height={450}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkCard;
