import { Router, Request, Response } from 'express';
import TeamsController from '../controller/Teams.Controller';
import TeamsServices from '../services/teams.service';

const teamsRoutes = Router();
const teamService = new TeamsServices();
const teamsController = new TeamsController(teamService);
teamsRoutes.get('/', (req: Request, res: Response) => teamsController.readAll(req, res));
teamsRoutes.get('/:id', (req: Request, res: Response) => teamsController.getById(req, res));

export default teamsRoutes;
