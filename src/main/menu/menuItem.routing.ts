import express from 'express';
import { RouteBase } from '../../base/route.base';
import { MenuItemController } from './menu.controller';

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
      .get(this.responseHandler(this.controller.create)) // Need to change
      .post(express.json(), this.responseHandler(this.controller.create));
    this.router.get(
      '/menuItems/:id',
      this.responseHandler(this.controller.get)
    );
  }
}
