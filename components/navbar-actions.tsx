'use client';
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { 
  SignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton, 
} from '@clerk/nextjs';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="items-center min-w-[50px] ml-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button className="rounded-md px-1 py-4 w-[60px]">
            <span className="text-xs font-bold">Sign In</span>
          </Button>
        </SignInButton>
      </SignedOut>
      
    </div>
  );
};

export default NavbarActions;
