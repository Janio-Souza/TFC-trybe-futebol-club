import { Router, Request, Response } from 'express';
import UserController from '../controller/User.Controller';
import UserService from '../services/user.service';
import validationLogin from '../middleware/validation.login';
import validationToken from '../middleware/validation.tokin';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);
userRoutes
  .post('/', validationLogin, (req: Request, res: Response) => userController.login(req, res));
userRoutes
  .get('/role', validationToken, (req: Request, res: Response) => userController.getRole(req, res));

export default userRoutes;
