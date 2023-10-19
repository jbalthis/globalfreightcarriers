import { NextResponse } from 'next/server';
// @ts-ignore
import { Resend } from 'resend';
import ContactEmailTemplate from '@/app/(public)/(routes)/contact/components/contact-email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  const message = await request.json();
  console.log(message);

  try {
    const data = await resend.emails.send({
      from: 'Contact Us <info@mygfcarrier.com>',
      to: ['tjc@mygfcarrier.com', 'tom@mygfcarrier.com', 'jbalthis@barelyjason.online'],
      subject: `Contact Form Message From: ${message.name}`,
      // @ts-ignore
      react: ContactEmailTemplate({ message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
