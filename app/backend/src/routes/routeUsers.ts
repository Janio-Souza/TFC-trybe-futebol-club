import { Router, Request, Response } from 'express';
import UserController from '../controller/User.Controller';
import UserService from '../services/user.service';
import validationLogin from '../middleware/validation.login';
import validationTokenAndDecode from '../middleware/validation.tokin.and.decode';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);
userRoutes
  .post('/', validationLogin, (req: Request, res: Response) => userController.login(req, res));
userRoutes
  .get('/role', validationTokenAndDecode, (req: Request, res: Response) =>
    userController.getRole(req, res));

export default userRoutes;
