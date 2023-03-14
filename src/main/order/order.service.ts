import { PrismaClient, Order } from '@prisma/client';

export class OrderService {
  private readonly prisma = new PrismaClient();

  public async get(id: number): Promise<Order | null> {
    return await this.prisma.order.findUnique({
      where: { id: id },
      include: {
        customer: true,
        table: true,
        items: { include: { menuItem: true } },
      },
    });
  }

  public async get_many(skip: number, take: number): Promise<Order[] | null> {
    return await this.prisma.order.findMany({
      skip: skip,
      take: take,
    });
  }

  public async update() {}

  public async delete(id: number): Promise<Order> {
    return await this.prisma.order.delete({
      where: { id: id },
    });
  }
}
