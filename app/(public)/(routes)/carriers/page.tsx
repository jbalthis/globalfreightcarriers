import React from 'react';
import CarriersJumbotron from './components/carriers-jumbotron';
import { Separator } from '@/components/ui/separator';

const CarriersPage = () => {
  return (
    <div>
      <CarriersJumbotron />
      <section className="mb-32 mt-16 container">
    <h1 className="mb-4 text-3xl font-bold">
      An intriguing title for an interesting article
    </h1>

    <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        className="mr-2 h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>Hot news
    </p>

    <p className="mb-6">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
      sapiente molestias consectetur. Fuga nulla officia error placeat
      veniam, officiis rerum laboriosam ullam molestiae magni velit laborum
      itaque minima doloribus eligendi! Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Optio sapiente molestias consectetur.
      Fuga nulla officia error placeat veniam, officiis rerum laboriosam
      ullam molestiae magni velit laborum itaque minima doloribus eligendi!
    </p>

    <p className="mb-6">
      <strong>Optio sapiente molestias consectetur?</strong>
    </p>

    <p className="mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      architecto ex ab aut tempora officia libero praesentium, sint id
      magnam eius natus unde blanditiis. Autem adipisci totam sit
      consequuntur eligendi.
    </p>

    <p
      className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
      <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Optio odit consequatur porro sequi ab distinctio
      modi. Rerum cum dolores sint, adipisci ad veritatis laborum eaque
      illum saepe mollitia ut voluptatum.
    </p>

    <p className="mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
      libero repellat molestiae aperiam laborum aliquid atque magni nostrum,
      inventore perspiciatis possimus quia incidunt maiores molestias eaque
      nam commodi! Magnam, labore.
    </p>

    <img src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
      className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />

    <ul className="mb-6 list-inside list-disc">
      <li>Lorem</li>
      <li>Ipsum</li>
      <li>Dolor</li>
      <li>Sit</li>
      <li>Amet</li>
    </ul>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
      temporibus nulla voluptatibus accusantium sapiente doloremque.
      Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
      nostrum in accusantium dolore veritatis eius est?
    </p>
  </section>
     <section className="mb-32 text-center px-4">
    <h2 className="mb-20 text-3xl font-bold">Why is it so great?</h2>

    <div className="grid lg:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-slate-300">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-neutral-50 p-4 text-primary shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Support 24/7</h5>
            <p>
              Laudantium totam quas cumque pariatur at doloremque hic quos
              quia eius. Reiciendis optio minus mollitia rerum labore
              facilis inventore voluptatem ad, quae quia sint.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-0">
        <div
          className="block h-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-slate-300">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-neutral-50 p-4 text-primary shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Safe and solid</h5>
            <p>
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam
              ullam aspernatur odio soluta, quisquam dolore animi mollitia a
              omnis praesentium, expedita nobis!
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="block h-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-slate-300">
          <div className="flex justify-center">
            <div className="-mt-8 inline-block rounded-full bg-neutral-50 p-4 text-primary shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-semibold">Extremely fast</h5>
            <p>
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem? Facilis
              debitis aspernatur amet nisi?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    
   
     <section className="mb-32">

    <div className="container mx-auto text-center lg:text-left xl:px-32">
      <div className="flex grid items-center lg:grid-cols-2">
        <div className="mb-12 lg:mb-0">
          <div
            className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 className="mb-8 text-3xl font-bold">Enjoy the moment</h2>
            <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              soluta corporis voluptate ab error quam dolores doloremque,
              quae consectetur.
            </p>

            <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best team
              </p>

              <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best quality
              </p>

              <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best experience
              </p>
            </div>

            <p className="mb-0 text-neutral-500 dark:text-neutral-300">
              In ac turpis justo. Vivamus auctor quam vitae odio feugiat
              pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
              sed cursus lectus. Proin non rutrum magna. Proin gravida,
              justo et imperdiet tristique, turpis nisi viverra est, nec
              posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
              condimentum nulla, ut aliquet erat auctor sed. Aenean
              facilisis neque id ligula maximus scelerisque. Nunc sed velit
              rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
              viverra posuere. Ut commodo risus lacus, ac scelerisque quam
              aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
              Quisque congue turpis quis libero ullamcorper imperdiet.
              Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
              et lectus sit amet neque luctus viverra.
            </p>
          </div>
        </div>

        <div>
          <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
        </div>
      </div>
    </div>
   
  </section>
    </div>
  );
};

export default CarriersPage;
