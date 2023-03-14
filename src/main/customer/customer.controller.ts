import { Request } from 'express';
import { ControllerBase } from '../../base/controller.base';
import { CustomerService } from './customer.service';

export class CustomerController extends ControllerBase {
  private readonly customerService = new CustomerService();

  public async create(req: Request) {
    const { name, phone, email, address } = req.body;

    const result = await this.customerService.create(
      name,
      phone,
      email,
      address
    );

    return this.formatResponse('customer_form', { result: result });
  }

  public async get(req: Request) {
    const { id } = req.params;
    const customer = await this.customerService.get(Number(id));

    return this.formatResponse('customer_detail', { customer: customer });
  }

  public async get_many(req: Request) {
    const skip = req.query.skip || 0;
    const take = req.query.take || 10;

    const customers = await this.customerService.get_many(
      Number(skip),
      Number(take)
    );

    return this.formatResponse('customer', {
      customers: customers,
    });
  }
}
