import HeroStyles from '@/styles/hero.style';
import GetStarted from './get-started';
import { AreaChart } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const styles = HeroStyles;
  const pink_gradiant =
    'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]';
  const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]';
  const blue_gradiant =
    'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]';
  const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-blue-900';
  const text_gradient =
    'bg-gradient-to-br from-blue-200 via-lime-300 to-indigo-800 text-transparent bg-clip-text';

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} px-4 mx-4`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-4 px-4 ${bg_discount_gradient} rounded-[10px] mb-2`}
        >
          <AreaChart className="w-[24px] h-[24px] text-white" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">
              Over <span className="italic text-lime-300">20 years</span>{' '}
              Freight Shipping Experience with
            </span>
            <br />
            <span className="text-white">
              <span className="italic text-lime-300">Lowest</span> Freight
              Hauling<span className="italic text-lime-300"> Rates</span> in
              North America
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Trust.
            <br className="sm:block hidden" />{' '}
            <span className={`${text_gradient}`}>Transparency.</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Tranquility.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-800`}>
          Global Freight Carriers provides simple, affordable solutions for all
          your shipping needs, locally or globally. Whether it&apos;s oversize,
          expedited, refrigerated, or super loads, one call to us handles it
          all!
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image
          src="/images/hero.png"
          alt="hero"
          width={400}
          height={400}
          className="rounded-[10px] object-contain"
        />

        {/* gradient start */}
        <div
          className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `}
        />
        <div
          className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} bottom-40`}
        />
        <div
          className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`}
        />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
