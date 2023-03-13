import { Prisma, PrismaClient, MenuItem } from '@prisma/client';

export class MenuItemService {
  private readonly prisma = new PrismaClient();

  public async get(id: number): Promise<MenuItem | null> {
    return await this.prisma.menuItem.findUnique({
      where: { id: id },
    });
  }

  public async get_many(
    skip: number,
    take: number
  ): Promise<MenuItem[] | null> {
    return await this.prisma.menuItem.findMany({
      skip: skip,
      take: take,
    });
  }

  public async create(
    name: string,
    description: string,
    price: string
  ): Promise<MenuItem> {
    return await this.prisma.menuItem.create({
      data: {
        name: name,
        description: description,
        price: Number(price),
      },
    });
  }

  public async update(
    id: number,
    data: Prisma.MenuItemUpdateInput
  ): Promise<MenuItem> {
    return await this.prisma.menuItem.update({
      where: { id: id },
      data: data,
    });
  }

  public async delete(id: number): Promise<MenuItem> {
    return await this.prisma.menuItem.delete({
      where: { id: id },
    });
  }
}
