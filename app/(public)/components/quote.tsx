import React from 'react';
import Image from 'next/image';

import QuoteForm from './quote-form';
import { ArrowRightCircle } from 'lucide-react';

const Quote = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4">
      <div className="basis-1/2 p-8">
        <h1 className="text-3xl font-bold mb-12">Get a Quote</h1>
        <p className="text-xl font-semibold my-8">
          We Have the Lowest Freight Hauling Rates in North America!
        </p>
        <p className="text-xl italic my-8">
          Best Rates, Best Service, Most Drivers, and Most Experience!
        </p>
        <p className="my-8">
          One call to Global Freight Carriers, and we solve all your freight
          shipping needs nationwide:
        </p>
        <ul>
          <li>
            <ArrowRightCircle
              width={24}
              height={24}
              className="text-lime-500 inline-block ml-4"
            />
            <span className="ml-2">Frozen/Refrigerated (Reefers)</span>
          </li>
          <li>
            <ArrowRightCircle
              width={24}
              height={24}
              className="text-lime-500 inline-block ml-4"
            />
            <span className="ml-2">LTL, Full Loads, Partial Loads</span>
          </li>
          <li>
            <ArrowRightCircle
              width={24}
              height={24}
              className="text-lime-500 inline-block ml-4"
            />
            <span className="ml-2">
              Van, Flat beds, Step Decks, RGN’s, Heavy Hauls
            </span>
          </li>
          <li>
            <ArrowRightCircle
              width={24}
              height={24}
              className="text-lime-500 inline-block ml-4"
            />
            <span className="ml-2">Dedicated Routes</span>
          </li>
          <li>
            <ArrowRightCircle
              width={24}
              height={24}
              className="text-lime-500 inline-block ml-4"
            />
            <span className="ml-2">Over Dim Hauls</span>
          </li>
          <li>
            <ArrowRightCircle
              width={24}
              height={24}
              className="text-lime-500 inline-block ml-4"
            />
            <span className="ml-2">Expedited</span>
          </li>
        </ul>
        <p className="my-8">
          WE SHIP ANYTHING AND EVERYTHING FROM MACHINERY and PARTS TO
          ATTACHMENTS and SPECIALIZED SHIPMENTS!!
        </p>
        <p className="italic my-8">
          Complete our form for a Free Quote on your next shipment!
        </p>
        <Image
          src="/images/quote-truck.jpg"
          width={500}
          height={500}
          alt="truck"
          className="rounded-md mx-auto py-4"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="basis-1/2 p-8">
        <QuoteForm />
      </div>
    </div>
  );
};

export default Quote;
