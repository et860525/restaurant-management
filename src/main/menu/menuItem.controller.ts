import { MenuItem } from '@prisma/client';
import { Request } from 'express';
import { ControllerBase } from '../../base/controller.base';
import { MenuItemService } from './menuItem.service';

export class MenuItemController extends ControllerBase {
  private readonly menuService = new MenuItemService();

  public async form() {
    return this.formatResponse('menuItem_form');
  }

  public async create(req: Request) {
    const { name, description, price } = req.body;
    const menuItem = await this.menuService.create(name, description, price);

    return this.formatRedirectResponse(`/menuItems/${menuItem.id}`);
  }

  public async get(req: Request) {
    const { id } = req.params;
    const menuItem = await this.menuService.get(Number(id));

    this.checkMenuItem(id, menuItem);

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

  public async update_get(req: Request) {
    const { id } = req.params;
    const menuItem = await this.menuService.get(Number(id));
    this.checkMenuItem(id, menuItem);

    return this.formatResponse('menuItem_form', { data: menuItem });
  }

  public async update(req: Request) {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const menuItem = await this.menuService.update(Number(id), {
      name: name,
      description: description,
      price: Number(price),
    });

    return this.formatRedirectResponse(`/menuItems/${menuItem.id}`);
  }

  public async delete_get(req: Request) {
    const { id } = req.params;
    const deleteUrl = req.path.split('/')[1];

    const menuItem = await this.menuService.get(Number(id));
    this.checkMenuItem(id, menuItem);

    return this.formatResponse('delete', {
      deleteItem: menuItem,
      deleteUrl: deleteUrl,
    });
  }

  public async delete(req: Request) {
    const { id } = req.params;
    await this.menuService.delete(Number(id));
    return this.formatRedirectResponse('/menuItems');
  }

  private checkMenuItem = async (id: string, menuItem: MenuItem | null) => {
    if (menuItem === null) {
      return this.formatResponse('error', {
        error: new Error(`MenuItem ${id} is not exist`),
      });
    } else {
      return menuItem;
    }
  };
}
