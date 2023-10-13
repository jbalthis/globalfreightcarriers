'use client';

import PublicItem from './public-item';
import useRoutes from '@/hooks/use-routes';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@prisma/client';
import { Separator } from '@/components/ui/separator';
import { UserCircle } from 'lucide-react';

interface SidebarProps {
  currentUser?: User;
}

const Sidebar: React.FC<SidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();

  console.log({ currentUser }, 'TEST');

  return (
    <>
      <Separator className="border border-blue-800/10" />
      <nav className="mt-4 flex justify-between">
        <ul role="list" className="flex flex-col space-y-1">
          {routes.map((item) => (
            <PublicItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
      <Separator className="my-4 border border-blue-800/10" />
      <nav className="mt-4 flex flex-col justify-between">
        <div
          className="
            cursor-pointer
            transition 
            text-gray-500 
            pl-1 
            text-sm 
            leading-6 
            font-semibold 
            hover:text-black 
            hover:bg-gray-100
            flex
            flex-row
          "
        >
          <Avatar>
            <AvatarImage />
            <AvatarFallback>
              <UserCircle />
            </AvatarFallback>
          </Avatar>
          <div className="inline-block mt-2 ml-2">
            {!currentUser ? 'Account Login' : 'Welcome back'}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
