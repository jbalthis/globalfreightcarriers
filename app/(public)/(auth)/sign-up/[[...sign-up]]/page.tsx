import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Authentication into the Global Freight Carriers, LLC dashboard.',
};

export default function SignUpPage() {
  return (
    <>

      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[url('/images/registration.jpg')]  bg-zinc-900 " />
          <div className="relative z-20 flex items-center text-lg font-medium gap-2 ">
            <Image
              src="/images/globe-logo.png"
              alt="globe-logo"
              width="25"
              height="25"
            />
            Global Freight Carriers, LLC.
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This dashboard has helped me to track and manage all of
                my freight and shipped assets.&rdquo;
              </p>
              <footer className="text-sm">Tom Cutura</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            
            <SignUp />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
