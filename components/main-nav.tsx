'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useRoutes from '@/hooks/use-routes';
import { cn } from '@/lib/utils';
import PublicItem from './public-item';

const MainNav = ({}) => {
  const pathname = usePathname();
  const routes = useRoutes();

  return (
    <ul role="list" className="flex flex-col md:flex-row list-none lg:mx-auto">
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
  );
};

export default MainNav;
