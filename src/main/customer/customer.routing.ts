import express from 'express';
import { RouteBase } from '../../base/route.base';
import { CustomerController } from './customer.controller';

export class CustomerRoute extends RouteBase {
  protected controller!: CustomerController;

  constructor() {
    super();
  }

  protected initial(): void {
    this.controller = new CustomerController();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get(
      '/customers',
      this.responseHandler(this.controller.get_many)
    );
    this.router
      .route('/customers/create')
      .get(this.responseHandler(this.controller.create)) // Need to change
      .post(express.json(), this.responseHandler(this.controller.create));
    this.router.get(
      '/customers/:id',
      this.responseHandler(this.controller.get)
    );
  }
}
