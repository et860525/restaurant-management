import { Router, Request, Response, NextFunction } from 'express';
import { ControllerBase } from './controller.base';
import {
  renderResponseObject,
  redirectResponseObject,
} from '../common/response/response.object';

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
    method: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<renderResponseObject>
  ) {
    return (req: Request, res: Response, next: NextFunction) => {
      method
        .call(this.controller, req, res, next)
        .then((obj) => res.render(obj.view, obj.data))
        .catch((err) => next(err));
    };
  }

  protected responseRedirectHandler(
    method: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<redirectResponseObject>
  ) {
    return (req: Request, res: Response, next: NextFunction) => {
      method
        .call(this.controller, req, res, next)
        .then((obj) => res.redirect(obj.status, obj.url))
        .catch((err) => next(err));
    };
  }
}
