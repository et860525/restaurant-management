import { Router, Request, Response, NextFunction } from 'express';
import { ControllerBase } from './controller.base';

export abstract class RouteBase {
  public router: Router = Router();
  protected controller!: ControllerBase;

  constructor() {
    this.initial();
  }

  protected initial(): void {
    this.registerRoute();
  }

  protected abstract registerRoute(): void;

  protected responseHandler(
    method: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) {
    return (req: Request, res: Response, next: NextFunction) => {
      method
        .call(this.controller, req, res, next)
        .then((obj) => res.render(obj.template, obj.data))
        .catch((err) => next(err));
    };
  }
}
