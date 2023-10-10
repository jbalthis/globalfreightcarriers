import React from 'react';

import PartnersJumbotron from './components/partners-jumbotron';
import SolutionsCard from './components/solutions-card';
import TechCard from './components/tech-card';
import AdvantageCard from './components/advantage-card';
import PaymentsCard from './components/payments-card';
import NetworkCard from './components/network-card';
import BoardCard from './components/board-card';
import Testimonials from './components/testimonials';
import Options from './components/options';
import Questions from './components/questions';
import Disclaimer from './components/disclaimer';

const PartnersPage = () => {
  return (
    <>
      <PartnersJumbotron />
      <SolutionsCard />
      <ul className="w-full items-center my-12">
        <li className="mx-auto my-8">
          <TechCard />
        </li>
        <li className="mx-auto my-8">
          <AdvantageCard />
        </li>
        <li className="mx-auto my-8">
          <PaymentsCard />
        </li>
      </ul>
      <NetworkCard />
      <BoardCard />
      <Testimonials />
      <Options />
      <Questions />
      <Disclaimer />
    </>
  );
};

export default PartnersPage;
