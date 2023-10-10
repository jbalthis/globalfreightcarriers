import React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SolutionsCard = () => {
  return (
    <Card className="max-w-[80%] my-8 mx-auto p-4">
      <CardHeader className="text-3xl font-semibold text-gray-800 text-center">
        Freight carrier solutions to drive your business
      </CardHeader>
      <Separator className="mb-4 mx-auto bg-blue-600 w-[150px] h-[3px]" />
      <CardContent className="text-gray-500 text-center">
        Find the right loads, make offers, book, and get paid with easy-to-use
        carrier tools that help you tackle everything your business requires.
      </CardContent>
    </Card>
  );
};

export default SolutionsCard;
