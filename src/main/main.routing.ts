import { RouteBase } from '../base/route.base';
import { MenuItemRoute } from './menu/menu.routing';

export class MainRoute extends RouteBase {
  private menuItemRoute!: MenuItemRoute;

  constructor() {
    super();
  }

  protected initial(): void {
    this.menuItemRoute = new MenuItemRoute();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.use('/', this.menuItemRoute.router);
  }
}
