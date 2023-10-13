'use client';

import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await signIn('credentials', {
        callbackUrl: 'https://mygfcarrier.com/dashboard',
        email: credentials.email,
        password: credentials.password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) =>
                setCredentials({
                  email: e.currentTarget.value,
                  password: credentials.password,
                })
              }
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="passw0rd"
              type="password"
              disabled={isLoading}
              onChange={(e) =>
                setCredentials({
                  email: credentials.email,
                  password: e.currentTarget.value,
                })
              }
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      
    </div>
  );
}
