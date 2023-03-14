import { Request } from 'express';
import { ControllerBase } from '../../base/controller.base';
import { TableService } from './table.service';

export class TableController extends ControllerBase {
  private readonly tableService = new TableService();

  public async create(req: Request) {
    const { number, capacity } = req.body;

    const result = await this.tableService.create(number, capacity);

    return this.formatResponse('table_form', { result: result });
  }

  public async get(req: Request) {
    const { id } = req.params;
    const table = await this.tableService.get(Number(id));

    return this.formatResponse('table_detail', { table: table });
  }

  public async get_many(req: Request) {
    const skip = req.query.skip || 0;
    const take = req.query.take || 10;

    const tables = await this.tableService.get_many(Number(skip), Number(take));

    return this.formatResponse('table', {
      tables: tables,
    });
  }
}
