import * as React from 'react';

interface ContactEmailTemplateProps {
  message: {
    name: "string",
    email: "string",
    message: "string"
  }
}

const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <h1>{message.name} is requesting a quote.</h1>
    <p>Here are the details:</p>
    <ul>
      <li>Name: {message.name}</li>
      <li>Email: {message.email}</li>
      <li>Message: {message.message}</li>
     
    </ul>
  </div>
);

export default ContactEmailTemplate;
