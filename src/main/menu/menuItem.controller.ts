import { Request } from 'express';
import { ControllerBase } from '../../base/controller.base';
import { MenuItemService } from './menu.service';

export class MenuItemController extends ControllerBase {
  private readonly menuService = new MenuItemService();

  public async create(req: Request) {
    const { name, description, price } = req.body;

    const result = await this.menuService.create(name, description, price);
    console.log(result);

    return this.formatResponse('menuItem_form', { result: result });
  }

  public async get(req: Request) {
    const { id } = req.params;
    const menuItem = await this.menuService.get(Number(id));

    return this.formatResponse('menuItem_detail', { menuItem: menuItem });
  }

  public async get_many(req: Request) {
    const skip = req.query.skip || 0;
    const take = req.query.take || 10;

    const menuItems = await this.menuService.get_many(
      Number(skip),
      Number(take)
    );

    return this.formatResponse('menuItem', {
      menuItems: menuItems,
    });
  }
}
