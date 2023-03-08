import { Request, Response } from 'express';
import IServiceUser from '../interfaces/IService.User';

export default class UserController {
  private _IService: IServiceUser;

  constructor(service: IServiceUser) {
    this._IService = service;
  }

  async login(req: Request, res: Response) {
    const result = await this._IService.login(req);
    return res.status(result.status).json(result.message);
  }

  async getRole(req: Request, res: Response) {
    const { payload: { id } } = req.body;
    const role = await this._IService.getUserById(id);
    return res.status(200).json({ role: role.message });
  }
}
