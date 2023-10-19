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


const contactFormSchema = z.object({
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
  message: z.string().min(2).max(120),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  function onSubmit(data: ContactFormValues) {
    toast({
      title: 'Submitting your request',
      description: <MailIcon width={24} height={24} />,
    });

    fetch('/api/contact', {
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
    <section className="mb-32  w-full text-center flex flex-row">
       <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-wrap min-w-[500px] mx-auto align-center items-center gap-16"
      >
      
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    Your business' name
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
                  <Input placeholder='jdoe@gmail.com' {...field} />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                   Your email address
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="gap-4 my-4">
                <FormLabel className="font-bold p-2">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How long does my delivery have to be completed?"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  <span className="font-light text-xs text-gray-500 my-8">
                    This is your question or comment to us.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
 
        <div className="w-full flex justify-center align-middle my-16">
          <Button
            type="submit"
            className="md:w-[50%] mx-auto sm:w-full text-lg py-6"
          >
            Send message
          </Button>
        </div>
      </form>
    </Form>
    </section>
  )
}
export default ContactForm
