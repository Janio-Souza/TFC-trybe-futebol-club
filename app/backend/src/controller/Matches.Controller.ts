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

  async endGame(req: Request, res: Response) {
    const { id } = req.params;
    console.log('log matches id', id);
    const result = await this._IService.updateProgress(Number(id));
    console.log(result);

    return res.status(200).json({ message: result });
  }

  async updateGames(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._IService.updateGame(Number(id), req.body);
    return res.status(200).json({ message: result });
  }

  async insertGames(req: Request, res: Response) {
    const result = await this._IService.insertGame(req.body);
    return res.status(result.status).json(result.message);
  }
}
