import { ArrowRight } from 'lucide-react';
import React from 'react';

const TechnologiesJumbotron = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/images/startup.jpg')] bg-gray-700 bg-blend-multiply mb-12">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Cutting edge technologies for shipping in a modern world
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at Global Freight Carriers we try to stay ahead of the curve and
          get the most out of every cent spent with us by using the most cutting
          edge technologies on the market.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/register"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <ArrowRight width={24} height={24} className="ml-2" />
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </a>
          <a
            href="https://globalfreight.logisticallytms.com"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            TMS login
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesJumbotron;
