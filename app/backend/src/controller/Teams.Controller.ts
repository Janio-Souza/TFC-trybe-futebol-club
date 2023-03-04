import { Request, Response } from 'express';
import IServiceTeams from '../interfaces/IService.Teams';

export default class TeamsController {
  private _IService: IServiceTeams;

  constructor(service: IServiceTeams) {
    this._IService = service;
  }

  async readAll(_req: Request, res: Response) {
    const result = await this._IService.readAll();
    return res.status(200).json(result);
  }
}
