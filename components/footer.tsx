import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Store } from 'lucide-react'

const Footer = () => {
  return (
    <div
        className="flex bg-gray-800 text-white justify-between gap-4 p-8 min-h-[500px]"
    >
      <div className="flex flex-col items-center px-4">
        <Image src="/images/logo.png" width={200} height={50} alt="logo" />
        <p className="text-sm mt-4">
          We Ship Anything & Everything:<br/> 
          Frozen/Reefers, LTL, Full Loads,<br/>
          Partial Loads, Vans, Flat beds,<br/>
          Step Decks, RGN’s, Heavy Hauls,<br/>
          Over Dim Hauls, Dedicated Routes,<br/>
          Expedited Services Available
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-center font-semibold">Contact Us!</h1>
        <div className="flex mt-2">
          <Store size={24} className="inline-block mt-6 mr-2"/>
          <Link href="https://maps.app.goo.gl/DVGKVYRqiHa3FZYh7">
            <p className="text-sm p-4 inline-block flex-col">26943 Westwood Rd, Suite B<br/>Westlake, OH 44145</p>
          </Link>
        </div>
        <div className="flex">
         <Phone size={24} className="inline-block mt-4 mr-2"/>
          <Link href="tel://+14408777447">
            <p className="text-sm p-4">(440)877-SHIP</p>
          </Link>
          <br/>
          <Link href="tel:+12165457447">
            <p className="text-sm p-4">(216)545-SHIP</p>
          </Link>
        </div>
        <div className="flex">
          <Mail size={24} className="inline-block mt-4 mr-2"/>
          <Link href="mailto:support@mygfcarrier.com">
            <p className="text-sm p-4">support@mygfcarrier.com</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Footer</h1>
        <p className="text-lg">Footer content</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Footer</h1>
        <p className="text-lg">Footer content</p>
      </div>
    </div>
  )
}

export default Footer