export class renderResponseObject {
  public readonly view: string = 'index';
  public readonly data: any = null;

  constructor(options: { view: string; data?: any }) {
    this.view = options.view || this.view;
    this.data = options.data || this.data;
  }
}

export class redirectResponseObject {
  public readonly status: number = 302;
  public readonly url: string = '/';

  constructor(options: { url: string; status?: number }) {
    this.url = options.url || this.url;
    this.status = options.status || this.status;
  }
}
