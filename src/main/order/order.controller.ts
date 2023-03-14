import { Request } from 'express';
import { ControllerBase } from '../../base/controller.base';
import { OrderService } from './order.service';

export class OrderController extends ControllerBase {
  private readonly orderService = new OrderService();

  // public async create(req: Request) {}

  public async get(req: Request) {
    const { id } = req.params;
    const order = await this.orderService.get(Number(id));

    return this.formatResponse('order_detail', { order: order });
  }

  public async get_many(req: Request) {
    const skip = req.query.skip || 0;
    const take = req.query.take || 10;

    const orders = await this.orderService.get_many(Number(skip), Number(take));

    return this.formatResponse('order', {
      orders: orders,
    });
  }
}
