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

const BoardCard = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 w-full min-h-[600px] place-items-center">
      <Card className="w-[80%] border-none shadow-none my-8 mx-auto">
        <CardContent className="ml-4 flex sm:flex-row flex-col justify-between">
          <Image
            src="/images/board.jpg"
            alt="network"
            className="object-contain inline-block"
            width={600}
            height={550}
          />
          <div className="object-last">
            <CardHeader className="text-2xl font-semibold text-gray-800">
              Find loads you&apos;ll love on our load board
            </CardHeader>
            <CardDescription className="text-lg text-gray-700">
              Search the largest load board of any provider in North America for
              more freight options—anytime and anywhere. Save time and reduce
              empty miles with recommended loads that match your preferences and
              search history.
            </CardDescription>
            <CardFooter className="mt-8 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="text-md p-8 outline outline-1"
                onClick={() => router.push('/register')}
              >
                View load board
              </Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardCard;
