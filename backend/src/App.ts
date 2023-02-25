import 'express-async-errors';
import express from 'express';
import * as routers from './api/routers';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.initAuthHeader();
    this.initRoutes();
  }

  private initAuthHeader(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE, OPTIONS, PUT, PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initRoutes(): void {
    this.app.use(routers.users);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
