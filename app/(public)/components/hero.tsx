'use client';
import HeroStyles from '@/styles/hero.style';
import GetStarted from './get-started';
import { AreaChart } from 'lucide-react';

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
    <>
      <div className="absolute top-100 left-0 w-full h-full overflow-hidden bg-[hsla(0,0%,0%,1.90] bg-fixed" />
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
        px-8
      `}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-4 sm:px-16 px-8 gap-8`}
        >
          <div
            className={`flex flex-row items-center py-2 px-2 ${bg_discount_gradient} rounded-[10px] mb-4`}
          >
            <AreaChart className="w-[24px] h-[24px] text-white mx-2" />
            <p className={`${styles.paragraph} ml-4 text-sm`}>
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

          <div className="flex flex-col justify-between gap-2 w-full">
            <h1 className="font-poppins font-semibold ss:text-[92px] text-[72px] text-gray-900 ss:leading-[100.8px] leading-[75px]">
              Trust.
            </h1>
            <h1
              className={`font-poppins font-semibold ss:text-[92px] text-[72px] ss:leading-[100.8px] leading-[75px] ${text_gradient}`}
            >
              Transparency.
            </h1>
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Tranquility.
            </h1>
          </div>
          <div className="ss:flex hidden md:mr-4 mr-8">
            <GetStarted />
          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-100`}>
            Global Freight Carriers provides simple, affordable solutions for
            all your shipping needs, locally or globally. Whether it&apos;s
            oversize, expedited, refrigerated, or super loads, one call to us
            handles it all!
          </p>
        </div>

        <div className={`ss:hidden ${styles.flexCenter} mt-4`}>
          <GetStarted />
        </div>
      </div>
    </>
  );
};

export default Hero;
