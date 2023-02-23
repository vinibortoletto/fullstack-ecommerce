import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.get('/users', userController.findAll);

export default router;
