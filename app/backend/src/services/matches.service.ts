// import { Request } from 'express';
import { ModelStatic } from 'sequelize';
import IMatches from '../interfaces/IMetches';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';

class MatchesServices implements IMatches {
  protected model: ModelStatic<MatchesModel> = MatchesModel;

  async getAll(): Promise<MatchesModel[]> {
    return this.model.findAll({
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamsModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
  }

  async updateProgress(id: number): Promise<string> {
    this.model.update({ inProgress: false }, { where: { id } });
    return 'Finished';
  }

  // async updateGame(id: number, req: Request): Promise<string> {
  //   this.model.update({ inProgress: false }, { where: { id } });
  //   return 'Finished';
  // }
}

export default MatchesServices;
