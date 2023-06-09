import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/Leaderboard.Controller';
import LeaderboardServices from '../services/leaderboard.service';

const leaderboardRoutes = Router();
const leaderboardService = new LeaderboardServices();
const leaderboardController = new LeaderboardController(leaderboardService);
leaderboardRoutes.get('/home', (req: Request, res: Response) =>
  leaderboardController.readAllHome(req, res));
leaderboardRoutes.get('/away', (req: Request, res: Response) =>
  leaderboardController.readAllAway(req, res));
leaderboardRoutes.get('/', (req: Request, res: Response) =>
  leaderboardController.readAll(req, res));

export default leaderboardRoutes;
