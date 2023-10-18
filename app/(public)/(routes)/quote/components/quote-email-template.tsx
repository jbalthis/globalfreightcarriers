import * as React from 'react';

interface QuoteEmailTemplateProps {
  quote: Quote
}

const QuoteEmailTemplate: React.FC<Readonly<QuoteEmailTemplateProps>> = ({
  quote,
}) => (
  <div>
    <h1>{quote.name} is requesting a quote.</h1>
    <p>Here are the details:</p>
    <ul>
      <li>Name: {quote.name}</li>
      <li>Email: {quote.email}</li>
      <li>Phone: {quote.phone}</li>
      <li>Pickup Location: {quote.pickup_location}</li>
      <li>Delivery Location: {quote.delivery_location}</li>
      <li>Quantity: {quote.quantity}</li>
      <li>Dimensions: {quote.dimensions}</li>
      <li>Description: {quote.description}</li>
    </ul>
  </div>
);

export default QuoteEmailTemplate;
