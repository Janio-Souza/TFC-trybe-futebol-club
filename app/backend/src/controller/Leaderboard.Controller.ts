import { Request, Response } from 'express';
import ILeaderboard from '../interfaces/ILeaderboard';
import selectHomeTimes from '../services/selectHomeTeams';

export default class LeaderboardController {
  private _IService: ILeaderboard;

  constructor(service: ILeaderboard) {
    this._IService = service;
  }

  async readAll(_req: Request, res: Response) {
    const result = await this._IService.getAllTimes();
    // const result = await this._IService.getById(1);
    const leaderboard = await selectHomeTimes(result);
    // return res.status(200).json(result.matches);
    console.log(leaderboard);
    return res.status(200).json(leaderboard);
  }
}
