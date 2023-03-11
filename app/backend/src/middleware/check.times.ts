import { NextFunction, Request, Response } from 'express';
import TeamsServices from '../services/teams.service';

const teamsService = new TeamsServices();

const checkTimes = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  try {
    await teamsService.getById(homeTeamId);
    await teamsService.getById(awayTeamId);
  } catch (error) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  next();
};

export default checkTimes;
