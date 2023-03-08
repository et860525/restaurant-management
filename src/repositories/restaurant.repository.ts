import { Prisma, PrismaClient } from '@prisma/client';

export class RestaurantRepository {
  private prisma = new PrismaClient();

  public async addRestaurant(name: string, address: string, phone: string) {
    const result = await this.prisma.restaurant.create({
      data: {
        name,
        address,
        phone,
      },
    });

    return result;
  }

  public async getRestaurant(id: string) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: {
        id: Number(id),
      },
    });
    return restaurant;
  }

  public async getRestaurants(skip: number = 0, take: number = 10) {
    const take_og = 10;
    const restaurants = await this.prisma.restaurant.findMany({
      skip: skip,
      take: Math.min(take, take_og),
    });
    return restaurants;
  }

  public async updateRestaurant() {}
  public async removeRestaurant() {}
}
