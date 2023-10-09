'use client';
import React from 'react';
import Container from '@/components/ui/container';
import { UserAuthForm } from '../components/user-auth-form';

const LoginPage = () => {
  return (
    <div className="p-8 w-full min-h-[500px]">
      <div className="text-center text-3xl font-bold my-4">Login</div>
      <div className="max-w-[500px] mx-auto">
        <UserAuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
