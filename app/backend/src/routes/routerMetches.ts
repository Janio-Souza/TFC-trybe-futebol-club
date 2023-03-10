import { Router, Request, Response } from 'express';
import MatchesController from '../controller/Matches.Controller';
import MatchesServices from '../services/matches.service';

const matcheRoutes = Router();
const matcheService = new MatchesServices();
const matcheController = new MatchesController(matcheService);
matcheRoutes.get('/', (req: Request, res: Response) => matcheController.readAll(req, res));

export default matcheRoutes;
