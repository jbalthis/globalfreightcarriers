import Hero from './components/hero';
import Quote from './components/quote';
import Cards from './components/cards';
import Newsletter from './components/newsletter';
import { Separator } from '@/components/ui/separator';
import FaqSection from './components/faq-section';
import ContactSection from './components/contact-section';
import TrustedSection from './components/trusted-section';
import TeamSection from './components/team-section';
import TestimonialsSection from './components/testimonials-section';
import LtlSection from './components/ltl-section';

export default function Home() {
  return (
    <div className="w-full min-h-page">
      <Hero />
      <Quote />
      <Separator />
      <LtlSection />
      <Cards />
      <TrustedSection />
      <Separator />
      <Newsletter />
      <Separator />
      {/* <TeamSection /> */}
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </div>  
  );
}
