import { Request, Response, NextFunction } from 'express';
import { RouteBase } from './base/route.base';
import { MainRoute } from './main/main.routing';

export class AppRoute extends RouteBase {
  private mainRoute!: MainRoute;

  constructor() {
    super();
  }

  protected initial(): void {
    this.mainRoute = new MainRoute();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.render('index');
    });
    this.router.use('/', this.mainRoute.router);
  }
}
