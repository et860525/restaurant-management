export abstract class ControllerBase {
  public formatResponse(template: string, data?: any) {
    const responseObject = { template: template, data: data };

    return responseObject;
  }
}
