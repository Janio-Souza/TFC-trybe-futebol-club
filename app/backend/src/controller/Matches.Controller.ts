import { Request, Response } from 'express';
import IMatches from '../interfaces/IMetches';

export default class MatchesController {
  private _IService: IMatches;

  constructor(service: IMatches) {
    this._IService = service;
  }

  async readAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const result = await this._IService.getAll();
    if (Object.keys(req.query).length === 1) {
      const filterMatches = result
        .filter((matches) => matches.inProgress.toString() === inProgress);
      return res.status(200).json(filterMatches);
    }
    return res.status(200).json(result);
  }
}
