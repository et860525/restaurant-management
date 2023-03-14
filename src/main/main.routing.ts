import { RouteBase } from '../base/route.base';
import { MenuItemRoute } from './menu/menuItem.routing';
import { TableRoute } from './table/table.routing';
import { CustomerRoute } from './customer/customer.routing';
import { OrderRoute } from './order/order.routing';

export class MainRoute extends RouteBase {
  private menuItemRoute!: MenuItemRoute;
  private tableRoute!: TableRoute;
  private customerRoute!: CustomerRoute;
  private orderRoute!: OrderRoute;

  constructor() {
    super();
  }

  protected initial(): void {
    this.menuItemRoute = new MenuItemRoute();
    this.tableRoute = new TableRoute();
    this.customerRoute = new CustomerRoute();
    this.orderRoute = new OrderRoute();
    super.initial();
  }

  protected registerRoute(): void {
    this.router.use('/', this.menuItemRoute.router);
    this.router.use('/', this.tableRoute.router);
    this.router.use('/', this.customerRoute.router);
    this.router.use('/', this.orderRoute.router);
  }
}
