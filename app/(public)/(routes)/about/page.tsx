import React from 'react';
import AboutJumbotron from './components/about-jumbotron';
import TeamSection from './components/team-section';

const AboutPage = () => {
  return (
    <div>
      <AboutJumbotron />
      <section className="mb-32 text-center">
    <div className="flex justify-center">
      <div className="max-w-[800px]">
        <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Are you ready <br />
          <span className="text-primary dark:text-primary-400">for an adventure?</span>
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-300">
          Our staff is ready to help you meet any of your shipping issues that may arise.
        </p>
      </div>
    </div>
  </section>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
