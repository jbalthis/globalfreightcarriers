import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  Ship,
  ShoppingBasket,
  Factory,
  Rocket,
  Contact,
  Pencil,
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Partners',
        href: '/partners',
        icon: Ship,
        active: pathname === '/partners',
      },
      {
        label: 'Carriers',
        href: '/carriers',
        icon: ShoppingBasket,
        active: pathname === '/carriers',
      },
      {
        label: 'Resources',
        href: '/resources',
        icon: Factory,
        active: pathname === '/resources',
      },
      {
        label: 'Technologies',
        href: '/technologies',
        icon: Rocket,
        active: pathname === '/technologies',
      },
      {
        label: 'About',
        href: '/about',
        icon: Contact,
        active: pathname === '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: Pencil,
        active: pathname === '/contact',
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
