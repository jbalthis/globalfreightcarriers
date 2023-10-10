'use client';
import { QuoteIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const Testimonials = () => {
  return (
    <div className="w-full h-min-[600px] bg-slate-200 p-8">
      <div className="w-[75%] mx-auto px-4 py-8 flex flex-col justify-between">
        <Link href="#" className="">
          <QuoteIcon width={80} height={80} className="text-gray-300" />
          <p className="text-blue-800 font-bold text-xs">
            WHAT PEOPLE ARE SAYING
          </p>
          <p className="text-4xl font-semibold">Testimonials</p>
        </Link>
        <div className="text-gray-800 mt-8 text-lg">
          &quot;We started our company in 2012 and have been working with Global
          Freight Carriers ever since. The ease of doing business with our rep
          and his team have made Global Freight Carriers our #1 3PL
          relationship. The Navisphere Carrier website and app help our business
          run more efficiently, whether it is updating loads, setting up
          preferred lanes, or even booking instantly. Finally, the amount of
          loads available at Global Freight Carriers helps us optimize the
          repositioning of our equipment, eliminating dead miles while keeping
          our drivers on the road! Thank you Global Freight Carriers.&quot;
        </div>
        <div className="mt-4 text-black font-semibold text-xl">
          Arthur <br />
          Co-Owner, GVG Express, Inc.
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
