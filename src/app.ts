import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { AppRoute } from './app.routing';

export class App {
  private app: Express = express();
  private route: AppRoute = new AppRoute();

  constructor() {
    this.setEnvironment();
    this.setUrlencoded();
    this.setCors();
    this.setHelmet();
    this.setMorgan();
    this.setViewEngine();
    this.registerRoute();
  }

  public runServer(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(
        '[server]: Server is running at http://localhost:%d in %s mode',
        process.env.PORT,
        process.env.NODE_ENV
      );
    });
  }

  private setEnvironment(): void {
    dotenv.config();
  }

  private setUrlencoded(): void {
    this.app.use(express.urlencoded({ extended: false }));
  }

  private setHelmet(): void {
    this.app.use(helmet());
  }

  private setCors(): void {
    this.app.use(cors());
  }

  private setMorgan(): void {
    this.app.use(morgan('dev'));
  }

  private setViewEngine(): void {
    this.app.set('view engine', 'pug');
  }

  private registerRoute(): void {
    this.app.use('/', this.route.router);
  }
}
