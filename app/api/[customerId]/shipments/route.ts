import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const {
      
    } = body;


    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    if (!params.customerId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const customerByTmsCustomerId = await prismadb.customer.findFirst({
      where: {
        tmsCustomerId: params.customerId
      },
    });

    if (!customerByTmsCustomerId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    // const shipment = await prismadb.shipment.create({
    //   data: {
    //     tmsCustomerId: params.customerId,
    //   },
    // });

    //return NextResponse.json(shipment);
  } catch (error) {
    console.log('[SHIPMENTS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
};

export async function GET(
  req: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    if (!params.customerId) {
      return new NextResponse('Customer id is required', { status: 400 });
    }

    const shipments = await prismadb.shipment.findMany({
      where: {
        tmsCustomerId: params.customerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(shipments);
  } catch (error) {
    console.log('[SHIPMENTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
