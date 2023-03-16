import { App } from './app';
import { DefaultException } from './exception/default.exception';

const runServer = () => {
  const app = new App();
  app.setException(DefaultException);
  app.runServer();
};

runServer();
