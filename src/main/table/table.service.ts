import { Prisma, PrismaClient, Table } from '@prisma/client';

export class TableService {
  private readonly prisma = new PrismaClient();

  public async get(id: number): Promise<Table | null> {
    return await this.prisma.table.findUnique({
      where: { id: id },
      include: { orders: true },
    });
  }

  public async get_many(skip: number, take: number): Promise<Table[] | null> {
    return await this.prisma.table.findMany({
      skip: skip,
      take: take,
    });
  }

  public async create(number: number, capacity: number): Promise<Table> {
    return await this.prisma.table.create({
      data: {
        number: number,
        capacity: capacity,
      },
    });
  }

  public async update() {}

  public async delete(id: number): Promise<Table> {
    return await this.prisma.table.delete({
      where: { id: id },
    });
  }
}
