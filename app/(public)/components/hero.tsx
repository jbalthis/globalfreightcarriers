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
    <div
      className={`
        flex
        md:flex-row
        flex-col
        ${styles.paddingY}
        bg-[url('/images/truck.jpg')]
        relative
        overflow-hidden
        bg-cover
        bg-no-repeat
        bg-center
      `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-4 sm:px-16 px-6 py-6`}
      >
        <div
          className={`flex flex-row items-center py-4 px-4 ${bg_discount_gradient} rounded-[10px] mb-4`}
        >
          <AreaChart className="w-[24px] h-[24px] text-white mx-2" />
          <p className={`${styles.paragraph} ml-4`}>
            <span className="text-white">
              Over <span className="italic text-lime-300">20 years</span>{' '}
              Freight Shipping Experience with the
            </span>

            <span className="text-white">
              <span className="italic text-lime-300"> Lowest</span> Freight
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
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-100`}>
          Global Freight Carriers provides simple, affordable solutions for all
          your shipping needs, locally or globally. Whether it&apos;s oversize,
          expedited, refrigerated, or super loads, one call to us handles it
          all!
        </p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mr-4`}>
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
