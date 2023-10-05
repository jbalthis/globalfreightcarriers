'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="flex items-center ml-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex items-center rounded-full bg-slate-700 px-4 py-2">
            <UserCircle size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">Log In</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">User Login</h4>
              <p className="text-sm text-muted-foreground">
                Enter your account credentials below.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Email</Label>
                <Input id="email" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Password</Label>
                <Input
                  id="password"
                  type="password"
                  className="col-span-2 h-8"
                />
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <Button>Login</Button>
                <Link href="/auth">
                  <span className="text-sm text-blue-600">Or, Register</span>
                </Link>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavbarActions;
