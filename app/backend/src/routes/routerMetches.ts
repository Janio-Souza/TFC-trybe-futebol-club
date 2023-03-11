import { Router, Request, Response } from 'express';
import MatchesController from '../controller/Matches.Controller';
import MatchesServices from '../services/matches.service';
import validationToken from '../middleware/validation.tokin';
import checkTimes from '../middleware/check.times';

const matcheRoutes = Router();
const matcheService = new MatchesServices();
const matcheController = new MatchesController(matcheService);
matcheRoutes.get('/', (req: Request, res: Response) => matcheController.readAll(req, res));
matcheRoutes.patch('/:id/finish', validationToken, (req: Request, res: Response) =>
  matcheController.endGame(req, res));
matcheRoutes.patch('/:id', validationToken, (req: Request, res: Response) =>
  matcheController.updateGames(req, res));
matcheRoutes.post('', validationToken, checkTimes, (req: Request, res: Response) =>
  matcheController.insertGames(req, res));

export default matcheRoutes;
