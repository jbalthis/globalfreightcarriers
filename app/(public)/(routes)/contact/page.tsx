import React from 'react';
import Link from 'next/link';
import ContactForm from './components/contact-form';
import ContactJumbotron from './components/contact-jumbotron';
import { Bug, Store, Wrench, Globe } from 'lucide-react'

const ContactPage = () => {
  return (
    <>
      <ContactJumbotron />

      <section className="p-4 mb-32">
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <div className="h-[500px] w-full pl-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.6150895804685!2d-81.9225036329631!3d41.44904312419122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830925adbc22db7%3A0xaf3cbbeae7c1d736!2s26943%20Westwood%20Rd%2C%20Westlake%2C%20OH%2044145!5e0!3m2!1sen!2sus!4v1697702343239!5m2!1sen!2sus" width={600} height={450} loading="lazy"></iframe>
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="flex flex-wrap px-16 pt-12 pb-12 md:pb-0 lg:pt-0">
            <div className=" mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <Wrench width={30} height={30} />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">
                    Technical support
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    support@mygfcarrier.com
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <Store width={30} height={30} />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">
                    Sales questions
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    sales@example.com
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    (440)877-SHIP
                  </p>
                </div>
              </div>
            </div>
            <div
              className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <Globe width={30} height={30} />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">Logistics support</p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    logistics@mygfcarrier.com</p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    (440)877-SHIP
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <Bug width={30} height={30} />
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">Bug reporting</p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    bugs@mygfcarrier.com
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center">
    <div className="text-5xl">Contact Form</div>
    <div className="text-xl mb-16 font-light text-slate-400">Reach out to us online</div>
  <ContactForm />
  </div>
    </>
  );
};

export default ContactPage;
