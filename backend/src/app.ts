import express, { Express } from 'express';
// import AppRouter from './routes/app.route';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    // this.routes();
  }

  config() {
    this.app.use(express.json());
  }

  // routes() {
  //   this.app.use(AppRouter);
  // }

  start(PORT: number) {
    this.app.listen(PORT, () => console.log('Rodando...'));
  }
}

export default App;
