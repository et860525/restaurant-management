import { RouteBase } from '../base/route.base';
import { RestaurantRoute } from './restaurant/restaurant.routing';

export class MainRoute extends RouteBase {
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
