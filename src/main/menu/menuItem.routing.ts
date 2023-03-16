import express from 'express';
import { RouteBase } from '../../base/route.base';
import { MenuItemController } from './menuItem.controller';

export class MenuItemRoute extends RouteBase {
  protected controller!: MenuItemController;

  constructor() {
    super();
  }

  protected initial(): void {
    this.controller = new MenuItemController();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get(
      '/menuItems',
      this.responseHandler(this.controller.get_many)
    );
    this.router
      .route('/menuItems/create')
      .get(this.responseHandler(this.controller.form))
      .post(
        express.json(),
        this.responseRedirectHandler(this.controller.create)
      );
    this.router.get(
      '/menuItems/:id',
      this.responseHandler(this.controller.get)
    );
    this.router
      .route('/menuItems/:id/delete')
      .get(this.responseHandler(this.controller.delete_get))
      .post(this.responseRedirectHandler(this.controller.delete));
    this.router
      .route('/menuItems/:id/update')
      .get(this.responseHandler(this.controller.update_get))
      .post(
        express.json(),
        this.responseRedirectHandler(this.controller.update)
      );
  }
}
