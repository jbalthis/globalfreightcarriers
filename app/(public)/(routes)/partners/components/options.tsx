'use client';
import React from 'react';
import Image from 'next/image';

const Options = () => {
  return (
    <div className="w-full p-4 my-12">
      <div className="text-4xl text-center font-semibold">
        Access the most freight options across North America
      </div>
      <p className="text-center my-4">
        With freight from 105,000 shippers, we offer more options to find and
        book the loads you want to haul.
      </p>
      <div className="md:flex md:flex-row grid grid-cols-2 gap-4 items-center w-full mx-auto py-8 px-12">
        <Image
          src="/images/pepsico-logo.png"
          alt="pepsi"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Image
          src="/images/microsoft-logo.png"
          alt="microsoft"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Image src="/images/lowes.png" alt="lowes" width={200} height={200} />
        <Image
          src="/images/lyft.png"
          alt="microsoft"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Image
          src="/images/gmi-corner-logo.png"
          alt="gmi"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Image
          src="/images/energizer-logo.png"
          alt="energizer"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Options;
