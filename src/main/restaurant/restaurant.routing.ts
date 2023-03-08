import express, { Request, Response, NextFunction } from 'express';
import { RouteBase } from '../../base/route.base';
import { RestaurantController } from './restaurant.controller';

export class RestaurantRoute extends RouteBase {
  protected controller!: RestaurantController;

  constructor() {
    super();
  }

  protected initial(): void {
    this.controller = new RestaurantController();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.render('index');
    });
    this.router.get(
      '/restaurant',
      this.responseHandler(this.controller.getRestaurants)
    );
    this.router
      .route('/restaurant/create')
      .get(this.responseHandler(this.controller.addRestaurant_get))
      .post(
        express.json(),
        this.responseHandler(this.controller.addRestaurant)
      );
    this.router.get(
      '/restaurant/:id',
      this.responseHandler(this.controller.getRestaurant)
    );
  }
}
