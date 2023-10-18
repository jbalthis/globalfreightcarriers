'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

import { cn } from '@/lib/utils';
import { MailIcon } from 'lucide-react';



const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  pickup_location: z.string().min(2).max(30),
  delivery_location: z.string().min(2).max(30),
  weight: z.string().min(2).max(8),
  dimensions: z.string().min(2).max(8),
  quantity: z.string().min(1).max(8),
  description: z.string().min(2).max(30),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuoteForm = () => {
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    mode: 'onChange',
  });

  function onSubmit(data: QuoteFormValues) {
    toast({
      title: 'Submitting your request',
      description: <MailIcon width={24} height={24} />,
    });

    fetch('/api/quote', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap gap-8"
      >
        <div className="basis-1/3 grow gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel className="font-bold p-2">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Elenor Rigby" {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Name of the person or business entity requesting the quote.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Email</FormLabel>
                <FormControl>
                  <Input placeholder="erigby@hotmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Email address of the person requesting the quote.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="(555)555-5555" {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Best phone number to reach you at.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="basis-1/3 grow">
          <FormField
            control={form.control}
            name="pickup_location"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Pickup Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 Reading St; Kalamzoo, MI 12345"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Physical address where the shipment is to be picked up.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="delivery_location"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">
                  Delivery Location
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="1001 Time Square; NY, NY 10001"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Physical address of where the shipment is being sent.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="1" {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    This is the number of items in the shipment.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="basis-1/3 grow">
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Weight</FormLabel>
                <FormControl>
                  <Input placeholder="1000 lbs." {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Total weight of the shipment.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dimensions"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Dimensions</FormLabel>
                <FormControl>
                  <Input placeholder='100"x50"x100"' {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Dimensions of the shipment.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="basis-1/3 grow">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="1 pallet of bagged dog food."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    This is a brief description of the shipment, along with any
                    relevant details.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex justify-center align-middle">
          <Button
            type="submit"
            className="md:w-[50%] mx-auto sm:w-full text-lg py-6"
          >
            Request Quote
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;
