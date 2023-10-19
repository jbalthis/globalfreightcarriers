'use client';
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation';
import {Button} from "@/components/ui/button"

const LtlSection = () => {
  const router = useRouter();
  return (
     <section className="my-32">

    <div className="container mx-auto text-center lg:text-left xl:px-32">
      <div className="flex grid items-center lg:grid-cols-2">
        <div className="mb-12 lg:mb-0">
          <div
            className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 className="mb-8 text-3xl font-bold">LTL Freight Shipping</h2>
            <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
              With the growth of ecommerce, less than truckload (LTL) shipping demands more flexibility than ever. Manage spend without sacrificing speed—let us help you find the right combination of LTL services to gain efficiencies while exceeding customer expectations.


            </p>

            <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row gap-4"><CheckCircledIcon width={30} height={30} />
                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                
                Get a competitive edge—improve your on time in full performance with comprehensive LTL freight services such as consolidation, parcel, and last mile.
              </p></li>
           
              
              <li  className="flex flex-row gap-4">
                <CheckCircledIcon width={30} height={30}/>
                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                
                Collaborate with seasoned supply chain experts who can help anticipate, strategize, and solve for your planned and unplanned LTL freight needs.
              </p>
              </li>
              

              <li  className="flex flex-row gap-4">
                <CheckCircledIcon width={30} height={30} />
                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                
                Discover smarter, more flexible multimodal options and end-to-end visibility with our industry leading Navisphere® technology. </p>
              </li>
                 </ul>
            </div>

           <Button onClick={() => router.push('/quote')} className="p-4">Get a Quote</Button>
          </div>
        </div>

        <div>
          <img src="/images/pallet.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
        </div>
      </div>
    </div>
   
  </section>
  )
}
export default LtlSection;

