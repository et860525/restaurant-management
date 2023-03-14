import { RouteBase } from '../../base/route.base';
import { OrderController } from './order.controller';

export class OrderRoute extends RouteBase {
  protected controller!: OrderController;

  constructor() {
    super();
  }

  protected initial(): void {
    this.controller = new OrderController();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.get('/orders', this.responseHandler(this.controller.get_many));
    this.router.get('/orders/:id', this.responseHandler(this.controller.get));
  }
}
