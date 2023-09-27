import Link from 'next/link';
import Image from 'next/image';

import MainNav from '@/components/main-nav';
import NavbarActions from '@/components/navbar-actions';
import Container from '@/components/ui/container';

const routes = [
  {
    id: '1',
    name: 'Shippers'
  },
  {
    id: '2',
    name: 'Carriers'
  },
  {
    id: '3',
    name: 'Resources'
  },
  {
    id: '4',
    name: 'Technologies'
  },
  {
    id: '5',
    name: 'About'
  },
  {
    id: '6',
    name: 'Contact'
  }
]

const Navbar = async () => {
  
  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link
            href='/'
            className='ml-4 flex lg:ml-0 gap-x-2'
          >
            <Image src="/images/globe-logo.png" alt="Globe Logo" width={30} height={30} />
            <span className='font-semibold text-xl'>Global Freight Carriers</span>
          </Link>
          <MainNav data={routes} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
