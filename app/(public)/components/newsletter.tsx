'use client';
import React from 'react';
import NewsletterForm from './newsletter-form';

const Newsletter = () => {
  return (
    <div className="my-10 flex flex-col p-4">
      <div className="my-4 text-3xl text-center font-semibold">
        Global Freight Carriers Newsletter
      </div>
      <div className="my-4 text-center text-sm text-gray-500">
        Sign up to receive our latest news and updates.
      </div>
      <div className="w-[500px] mx-auto">
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Newsletter;
