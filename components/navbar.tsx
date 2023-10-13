'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import MainNav from '@/components/main-nav';
import Sidebar from '@/components/sidebar';
import NavbarActions from '@/components/navbar-actions';
import Container from '@/components/ui/container';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface NavbarProps {
  className?: string;
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ className, children }) => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border border-b shadow-sm">
        <div className="container px-4 mx-auto flex flex-row items-center justify-between">
          <div className="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-between">
            <Link
              href="/"
              className="text-lg font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-gray-800"
            >
              <Image
                src="/images/logo-wide.png"
                alt="Logo"
                width={300}
                height={100}
                className="inline-block mr-4 whitespace-nowrap"
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <HamburgerMenuIcon
                  className="lg:hidden cursor-pointer my-2"
                  width={20}
                  height={20}
                />
              </SheetTrigger>

              <SheetContent
                className="w-[350px] sm:w-[490px] bg-gray-100"
                side="left"
              >
                <SheetHeader className="mb-4">
                  <Image
                    src="/images/logo-wide.png"
                    alt="Global Freight Carriers"
                    width={200}
                    height={75}
                  />
                </SheetHeader>

                <div className="mt-8">
                  <Sidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="lg:flex shrink items-center gap-8 justify-between hidden">
            <MainNav />

            <NavbarActions />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
