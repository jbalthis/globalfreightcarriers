import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { customerId: string } }
) {
try {
  if (!params.customerId) {
    return new NextResponse('Customer id is required', { status: 400 });
  }
  console.log('fromGet => '+params.customerId)
  const shipments = await prismadb.shipment.findMany({
    where: {
      tmsCustomerId: params.customerId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  console.log('shipments => '+JSON.stringify(shipments));
  return NextResponse.json(shipments);
} catch (error) {
  console.log('[SHIPMENTS_GET]', error);
  return new NextResponse('Internal error', { status: 500 });
}
}
