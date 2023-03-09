import { Request, Response } from 'express';
import IMatches from '../interfaces/IMetches';

export default class MatchesController {
  private _IService: IMatches;

  constructor(service: IMatches) {
    this._IService = service;
  }

  async readAll(req: Request, res: Response) {
    const result = await this._IService.getAll();
    return res.status(200).json(result);
  }
}
