import { Request } from 'express';
import { ControllerBase } from '../../base/controller.base';
import { RestaurantRepository } from '../../repositories/restaurant.repository';

export class RestaurantController extends ControllerBase {
  private readonly restaurantRepo = new RestaurantRepository();

  public async addRestaurant_get() {
    return this.formatResponse('restaurant_form');
  }

  public async addRestaurant(req: Request) {
    const { name, address, phone } = req.body;
    console.log(req.body);

    const result = await this.restaurantRepo.addRestaurant(
      name,
      address,
      phone
    );
    console.log(result);

    return this.formatResponse('restaurant_form', { result: result });
  }

  public async getRestaurant(req: Request) {
    const { id } = req.params;
    const restaurant = await this.restaurantRepo.getRestaurant(id);
    return this.formatResponse('restaurant', { restaurant: restaurant });
  }

  public async getRestaurants(req: Request) {
    const skip = req.query.skip || 0;
    const take = req.query.take || 10;

    const restaurants = await this.restaurantRepo.getRestaurants(
      Number(skip),
      Number(take)
    );
    return this.formatResponse('restaurant_list', {
      restaurants: restaurants,
    });
  }
}
