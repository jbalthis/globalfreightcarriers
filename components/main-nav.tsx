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
    <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
      <ul
        role="list"
        className="flex flex-col sm:flex-row list-none lg:mx-auto pl-4"
      >
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
    </div>
  );
};

export default MainNav;
