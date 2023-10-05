import React from 'react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const Cards = () => {
  return (
    <div className="p-8 my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader
          className="
            text-white
            bg-[url('/images/peterbilt.jpg')]
            relative
            overflow-hidden
            bg-cover
            bg-no-repeat
            bg-center
            rounded-md
            min-h-[200px]
          "
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50" />
        </CardHeader>
        <CardContent className="my-4">
          <h3 className="text-xl my-4 font-semibold text-center text-gray-800">
            Full and Partial Truck Loads
          </h3>
          <p className="p-4">
            We will connect you and your unique needs to the perfect one of our
            over 80,000 Independent Carriers in North America. And one call to
            Global Freight Carriers saves you money while getting your important
            freight shipment where it&amp;s going safely. Similarly, trust
            Global Freight Carriers to secure low-cost, high value, trustworthy
            freight shipping partners to accommodate your Full Truck Load or
            Partial Truck Load freight shipments.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            Click here to learn more about are shipment options!
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader
          className="
            text-white
            bg-[url('/images/heavy-haul.jpg')]
            relative
            overflow-hidden
            bg-cover
            bg-no-repeat
            bg-center
            rounded-md
            min-h-[200px]
          "
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50" />
        </CardHeader>
        <CardContent className="my-4">
          <h3 className="text-xl my-4 font-semibold text-center text-gray-800">
            Heavy Hauls and Super Loads
          </h3>
          <p className="p-4">
            Your one-stop shop solution for Heavy Haul and Super Loads freight
            shipments nationwide. Of course, Global Freight Carriers handles it
            all! For example:
          </p>
          <ul>
            <li>50k lbs and up</li>
            <li>Specializing in hauls over 100k lbs</li>
            <li>Fully insured and bonded</li>
            <li>LOWEST RATES, PERIOD</li>
            <li>
              Up to $5 million freight value? Global Freight Carriers has you
              covered!
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="/">
            Click here to learn more about are shipment options!
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader
          className="
            text-white
            bg-[url('/images/peterbilt.jpg')]
            relative
            overflow-hidden
            bg-cover
            bg-no-repeat
            bg-center
            rounded-md
            min-h-[200px]
          "
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50" />
        </CardHeader>
        <CardContent className="my-4">
          <h3 className="text-xl my-4 font-semibold text-center text-gray-800">
            Full and Partial Truck Loads
          </h3>
          <p className="p-4">
            We will connect you and your unique needs to the perfect one of our
            over 80,000 Independent Carriers in North America. And one call to
            Global Freight Carriers saves you money while getting your important
            freight shipment where it&amp;s going safely. Similarly, trust
            Global Freight Carriers to secure low-cost, high value, trustworthy
            freight shipping partners to accommodate your Full Truck Load or
            Partial Truck Load freight shipments.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            Click here to learn more about are shipment options!
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader
          className="
            text-white
            bg-[url('/images/peterbilt.jpg')]
            relative
            overflow-hidden
            bg-cover
            bg-no-repeat
            bg-center
            rounded-md
            min-h-[200px]
          "
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50" />
        </CardHeader>
        <CardContent className="my-4">
          <h3 className="text-xl my-4 font-semibold text-center text-gray-800">
            Full and Partial Truck Loads
          </h3>
          <p className="p-4">
            We will connect you and your unique needs to the perfect one of our
            over 80,000 Independent Carriers in North America. And one call to
            Global Freight Carriers saves you money while getting your important
            freight shipment where it&amp;s going safely. Similarly, trust
            Global Freight Carriers to secure low-cost, high value, trustworthy
            freight shipping partners to accommodate your Full Truck Load or
            Partial Truck Load freight shipments.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/">
            Click here to learn more about are shipment options!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
