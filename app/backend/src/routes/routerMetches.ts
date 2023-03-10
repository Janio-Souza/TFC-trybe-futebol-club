import { Router, Request, Response } from 'express';
import MatchesController from '../controller/Matches.Controller';
import MatchesServices from '../services/matches.service';
import validationToken from '../middleware/validation.tokin';

const matcheRoutes = Router();
const matcheService = new MatchesServices();
const matcheController = new MatchesController(matcheService);
matcheRoutes.get('/', (req: Request, res: Response) => matcheController.readAll(req, res));
matcheRoutes.patch('/:id/finish', validationToken, (req: Request, res: Response) =>
  matcheController.endGame(req, res));
// matcheRoutes.patch('/:id', validationToken, (req: Request, res: Response) =>
// matcheController.updateGame(req, res));

export default matcheRoutes;
