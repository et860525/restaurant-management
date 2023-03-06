import { Request, Response, NextFunction } from 'express';
import { RouteBase } from '../../base/route.base';

export class RestaurantRoute extends RouteBase {
  constructor() {
    super();
  }

  protected initial(): void {
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.render('index');
    });
  }
}
