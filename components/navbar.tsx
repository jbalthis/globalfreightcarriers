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

const Navbar: React.FC<NavbarProps> = async ({ className, children }) => {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Sheet open={isOpen}>
        <SheetContent>
          <Sidebar />
        </SheetContent>
      </Sheet> */}
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
            <Button
              className="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              // onClick={() => setIsOpen(true)}
            >
              <HamburgerMenuIcon />
            </Button>
          </div>
          <div className="md:flex shrink items-center gap-8 justify-between hidden">
            <MainNav />

            <NavbarActions />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
