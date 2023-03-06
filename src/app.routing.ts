import { RouteBase } from './base/route.base';
import { RestaurantRoute } from './main/restaurant/restaurant.routing';

export class AppRoute extends RouteBase {
  private restaurantRoute!: RestaurantRoute;

  constructor() {
    super();
  }

  protected initial(): void {
    this.restaurantRoute = new RestaurantRoute();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.use('/', this.restaurantRoute.router);
  }
}
