'use client';
import React from 'react';
import QuoteJumbotron from './components/quote-jumbotron';
import QuoteForm from './components/quote-form';

const FaqPage = () => {
  return (
    <div>
      <QuoteJumbotron />
      <div className="container">
        <div className="p-8 w-full flex flex-col">
          <QuoteForm />
        </div>
        
      </div>
    </div>
  );
};

export default FaqPage;
