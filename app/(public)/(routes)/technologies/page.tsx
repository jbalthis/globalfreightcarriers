import React from 'react';
import TechnologiesJumbotron from './components/technologies-jumbotron';

const TechnologiesPage = () => {
  return (
    <div>
      <TechnologiesJumbotron />
        <section className="container mb-32">
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
      <section className="background-radial-gradient mb-32">
  

    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
              Are you ready <br /><span className="text-[hsl(218,81%,75%)]">for an adventure?</span>
            </h1>
            <p className="text-lg text-[hsl(218,81%,95%)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima officia consequatur adipisci tenetur repudiandae rerum
              quos.
            </p>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
              style={{paddingTop: '56.25%'}}>
              <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                //@ts-ignore
                allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default TechnologiesPage;
