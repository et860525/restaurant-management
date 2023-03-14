import express from 'express';
import { RouteBase } from '../../base/route.base';
import { TableController } from './table.controller';

export class TableRoute extends RouteBase {
  protected controller!: TableController;

  constructor() {
    super();
  }

  protected initial(): void {
    this.controller = new TableController();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get('/tables', this.responseHandler(this.controller.get_many));
    this.router
      .route('/tables/create')
      .get(this.responseHandler(this.controller.create)) // Need to change
      .post(express.json(), this.responseHandler(this.controller.create));
    this.router.get('/tables/:id', this.responseHandler(this.controller.get));
  }
}
