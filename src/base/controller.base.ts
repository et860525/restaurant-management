import {
  renderResponseObject,
  redirectResponseObject,
} from '../common/response/response.object';

export abstract class ControllerBase {
  public formatResponse(view: string, data?: any) {
    const responseObject = new renderResponseObject({ view, data });

    return responseObject;
  }

  public formatRedirectResponse(url: string, status?: number) {
    const responseObject = new redirectResponseObject({ url, status });

    return responseObject;
  }
}
