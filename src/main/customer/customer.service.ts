import { Prisma, PrismaClient, Customer } from '@prisma/client';

export class CustomerService {
  private readonly prisma = new PrismaClient();

  public async get(id: number): Promise<Customer | null> {
    return await this.prisma.customer.findUnique({
      where: { id: id },
      include: { orders: true },
    });
  }

  public async get_many(
    skip: number,
    take: number
  ): Promise<Customer[] | null> {
    return await this.prisma.customer.findMany({
      skip: skip,
      take: take,
    });
  }

  public async create(
    name: string,
    phone: string,
    email: string,
    address: string
  ): Promise<Customer> {
    return await this.prisma.customer.create({
      data: {
        name: name,
        phone: phone,
        email: email,
        address: address,
      },
    });
  }

  public async update() {}

  public async delete(id: number): Promise<Customer> {
    return await this.prisma.customer.delete({
      where: { id: id },
    });
  }
}
