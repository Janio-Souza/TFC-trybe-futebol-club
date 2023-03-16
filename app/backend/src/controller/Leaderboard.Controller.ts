import { Request, Response } from 'express';
import ILeaderboard from '../interfaces/ILeaderboard';
import { homeLeaderboardTimes, awayLeaderboardTimes } from '../services/leaderboardTimes';
import leaderboard from '../services/leaderboardAll';

export default class LeaderboardController {
  private _IService: ILeaderboard;

  constructor(service: ILeaderboard) {
    this._IService = service;
  }

  async readAllHome(_req: Request, res: Response) {
    const result = await this._IService.getAllTimes();
    const homeLeaderboard = await homeLeaderboardTimes(result);
    return res.status(200).json(homeLeaderboard);
  }

  async readAllAway(_req: Request, res: Response) {
    const result = await this._IService.getAllTimes();
    const awayLeaderboard = await awayLeaderboardTimes(result);
    return res.status(200).json(awayLeaderboard);
  }

  async readAll(_req: Request, res: Response) {
    const result = await this._IService.getAllTimes();
    const homeLeaderboard = await homeLeaderboardTimes(result);
    const awayLeaderboard = await awayLeaderboardTimes(result);
    const leaderboardResult = await leaderboard(homeLeaderboard, awayLeaderboard);
    return res.status(200).json(leaderboardResult);
  }
}
