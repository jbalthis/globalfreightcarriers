import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className="p-8 justify-center gap-4 flex flex-row text-center text-lime-400">
      <Link href="https://www.facebook.com/mygfcarrier">
        <Facebook width={30} height={30} />
      </Link>
      <Link href="https://www.linkedin.com/company/mygfcarrier">
        <Linkedin width={30} height={30} />
      </Link>
      <Link href="https://twitter.com/mygfcarrier">
        <Twitter width={30} height={30} />
      </Link>
      <Link href="https://www.instagram.com/mygfcarrier">
        <Instagram width={30} height={30} />
      </Link>
    </div>
  );
};

export default SocialLinks;
