import Hero from './components/hero';
import Quote from './components/quote';
import Cards from './components/cards';
import Newsletter from './components/newsletter';

export default function Home() {
  return (
    <div className="w-full min-h-page">
      <Hero />
      <Quote />
      <Cards />
      <Newsletter />
    </div>
  );
}
