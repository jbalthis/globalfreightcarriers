'use client';

import PublicItem from './public-item';
import useRoutes from '@/hooks/use-routes';
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { User } from '@prisma/client';

interface SidebarProps {
  currentUser?: User;
  openSidebar?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentUser, openSidebar }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(openSidebar);

  console.log({ currentUser }, 'TEST');

  return (
    <>
      <div
        className={`${isOpen ? ' block' : ' hidden'}
          lg:fixed
        lg:inset-y-0
        lg:left-0
        lg:z-40
        lg:w-20
        xl:px-6
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between`}
      >
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
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
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            {/* <Avatar user={currentUser} /> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
