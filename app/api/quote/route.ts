import { NextResponse } from 'next/server';
// @ts-ignore
import { Resend } from 'resend';
import QuoteEmailTemplate from '@/app/(public)/(routes)/quote/components/quote-email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

  const quote = await request.json();
  console.log(quote);

  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: 'Quotes <quotes@mygfcarrier.com>',
      to: ['tjc@mygfcarrier.com', 'tom@mygfcarrier.com', 'jbalthis@barelyjason.online'],
      subject: `Quote Request: ${quote.name}`,
      // @ts-ignore
      react: QuoteEmailTemplate({ quote }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
