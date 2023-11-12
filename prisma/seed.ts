import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { shipments } from '../constants/shipments.js';
import {carriers} from '../constants/carriers.js';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.delete({
      where: { email: 'admin@example.com' },
    });
  } catch (err) {
    console.error(err);
  }

  const hashedPassword = await hash('StrongPassw0rd', 10);
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      hashedPassword,
      role: 'admin',
    },
  });

  // const customer = await prisma.customer.create({
  //   data: {
  //     name: "Tropical Auto"
  //   },// });

  shipments.forEach((item: any) => {
    let customer = prisma.customer.create({
      data: item
    })
  });

  shipments.forEach((item: any) => {
    let shipment = prisma.shipment.create({
      data: item
    })
  });

  carriers.forEach((item: any) => {
    let carrier = prisma.carrier.create({
      data: item
    })
  })

  

  console.log({ adminUser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
