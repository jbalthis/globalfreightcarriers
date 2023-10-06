import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import client from '@/lib/prismadb';

export async function POST(req: NextRequest) {
  const prisma = client;
  const { email, password } = await req.json();
  const hashedPassword = await hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name: email,
      },
    });

    return NextResponse.json({
      status: 'ok',
      message: 'User was successfully created.',
      user: {
        email,
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        status: 'fail',
        message: (err as Error)?.message,
      }),
      {
        status: 500,
      }
    );
  }
}
