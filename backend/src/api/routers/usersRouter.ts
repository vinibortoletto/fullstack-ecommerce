import { Router } from 'express';
import UserController from '../controllers/UserController';
import ValidateNewUser from '../middlewares/ValidateNewUser';
import UserService from '../services/UserService';

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.get('/users', userController.findAll.bind(userController));
router.get('/users/:id', userController.findById.bind(userController));
router.post(
  '/users',
  ValidateNewUser.validate,
  userController.create.bind(userController)
);

export default router;
