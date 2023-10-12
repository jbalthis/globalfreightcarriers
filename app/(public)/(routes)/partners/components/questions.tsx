'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { useRouter } from 'next/navigation';

const Questions = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between gap-8 w-full bg-slate-100 min-h-[300px] p-12">
      <div className="text-center text-4xl font-semibold mt-8">
        Answer your questions about being a Global Freight Carriers contract
        carrier
      </div>
      <div className="justify-center mx-auto">
        <Button
          onClick={() => router.push('/faq')}
          className="bg-blue-500 text-sm p-4"
        >
          Visit our FAQ
        </Button>
      </div>
    </div>
  );
};

export default Questions;
