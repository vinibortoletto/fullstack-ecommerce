import { Router } from 'express';
import { UserController } from '../controllers';
import { ValidateNewUser } from '../middlewares';
import { UserService } from '../services';

const router = Router();
const service = new UserService();
const controller = new UserController(service);

router.get('/users', controller.findAll.bind(controller));

router.get('/users/:id', controller.findById.bind(controller));

router.post(
  '/users',
  ValidateNewUser.validate,
  controller.create.bind(controller)
);

router.post('/login', controller.login.bind(controller));

export default router;
