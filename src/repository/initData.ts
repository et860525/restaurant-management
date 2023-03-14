import { Prisma, PrismaClient, Payment } from '@prisma/client';

const repo = new PrismaClient();

const items: Prisma.MenuItemCreateInput[] = [
  { name: 'ItemA', price: 50.5 },
  { name: 'ItemB', price: 29 },
  { name: 'ItemC', price: 70.5 },
];

const tables: Prisma.TableCreateInput[] = [
  { number: 1, capacity: 2 },
  { number: 2, capacity: 4 },
  { number: 3, capacity: 6 },
  { number: 4, capacity: 8 },
];

const customers: Prisma.CustomerCreateInput[] = [
  {
    name: 'John',
    phone: '0912345678',
    address: 'Taipei Block A',
    email: 'johnL@example.com',
  },
];

const main = async () => {
  /* Initialize */
  const table_list = await repo.table.createMany({
    data: tables,
    skipDuplicates: true,
  });
  const item_list = await repo.menuItem.createMany({
    data: items,
    skipDuplicates: true,
  });
  const customer_list = await repo.customer.createMany({
    data: customers,
    skipDuplicates: true,
  });

  console.log(table_list);
  console.log(item_list);
  console.log(customer_list);

  const customerWithOrder = await repo.customer.create({
    data: {
      name: 'Paul',
      phone: '0987654321',
      address: 'Taipei Block B',
      email: 'paulM@example.com',
      orders: {
        create: {
          payment_method: Payment.Debit,
          table: {
            connect: {
              id: 2,
            },
          },
          items: {
            create: {
              quantity: 3,
              menuItem: {
                connect: {
                  id: 2,
                },
              },
            },
          },
        },
      },
    },
  });

  console.log(customerWithOrder);
};

main();
