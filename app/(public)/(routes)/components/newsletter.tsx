'use client';
import React from 'react';
import NewsletterForm from './newsletter-form';

const Newsletter = () => {
  return (
    <section className="mb-32 text-center lg:text-left">
    <div className="flex flex-wrap justify-center">
      <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
        <div className="grid items-center gap-x-6 lg:grid-cols-2">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold dark:text-white pt-32">
              Do not miss any updates.
              <br />
              <span className="text-primary dark:text-primary-400">Subscribe to the newsletter</span>
            </h2>
          </div>

          <div className="mb-6 flex-row md:mb-0 md:flex">
            <div className="relative mb-3 pt-16 w-full md:mr-3 md:mb-0 xl:w-96" data-te-input-wrapper-init>
              <NewsletterForm />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Newsletter;
