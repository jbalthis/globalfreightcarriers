'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TechCard = () => {
  const router = useRouter();

  return (
    <Card className="w-[80%] border-none shadow-none my-8 mx-auto">
      <CardContent className="ml-4 flex md:flex-row flex-col justify-betwee gap-4">
        <div className="order-last">
          <CardHeader className="text-2xl font-semibold text-gray-800">
            Carrier technology
          </CardHeader>
          <CardDescription className="text-lg text-gray-500">
            Spend less time going back and forth on phone calls or email by
            instantly booking the loads you want or making offers in
            Navisphere® Carrier. Our end-to-end technology makes it easy to
            keep your business moving.
          </CardDescription>
          <CardFooter className="mt-8">
            <Button
              variant="outline"
              size="lg"
              className="text-md p-8 outline outline-1"
              onClick={() => router.push('/technologies')}
            >
              Explore Technology
            </Button>
          </CardFooter>
        </div>
        <Image
          src="/images/technology.jpg"
          alt="tech"
          className="object-contain inline-block"
          width={450}
          height={450}
        />
      </CardContent>
    </Card>
  );
};

export default TechCard;
