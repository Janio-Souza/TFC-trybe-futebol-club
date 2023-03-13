import { Request, Response } from 'express';
import ILeaderboard from '../interfaces/ILeaderboard';
import leaderboardTimes from '../services/leaderboardTimes';

export default class LeaderboardController {
  private _IService: ILeaderboard;

  constructor(service: ILeaderboard) {
    this._IService = service;
  }

  async readAll(_req: Request, res: Response) {
    const result = await this._IService.getAllTimes();
    const homeLeaderboard = await leaderboardTimes(result);
    console.log(homeLeaderboard);
    return res.status(200).json(homeLeaderboard);
  }
}
