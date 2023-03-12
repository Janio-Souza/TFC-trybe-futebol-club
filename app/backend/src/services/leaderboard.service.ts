import { ModelStatic } from 'sequelize';
import ILeaderboard from '../interfaces/ILeaderboard';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';
// import IdNotFoundError from '../errors/idNotFoundErro';

// const ID_NOT_FOUND = 'ID não existe';

class LeaderboardServices implements ILeaderboard {
  protected model: ModelStatic<MatchesModel> = MatchesModel;
  protected modelTeams: ModelStatic<TeamsModel> = TeamsModel;

  async getAllTimes(): Promise<{ times: object[], matches: object }> {
    const times = await this.modelTeams.findAll();
    const matches = await this.model.findAll({
      // attributes: [],
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: [['team_name', 'name']] },
        { model: TeamsModel, as: 'awayTeam', attributes: [['team_name', 'name']] },
      ],
      where: { inProgress: false },
    });
    // console.log(times);
    return { times, matches };
  }

  // async getById(id: number) : Promise<any> {
  //   const result = await this.model.findOne({
  //     where: { id },
  //     include: [
  //       { model: TeamsModel, as: 'homeTeam', attributes: [['team_name', 'name']] },
  //       { model: TeamsModel, as: 'awayTeam', attributes: [['team_name', 'name']] },
  //     ],
  //   });

  //   console.log(result?.dataValues);
  //   if (result === null) throw new IdNotFoundError(ID_NOT_FOUND);
  //   return result;
  // }
}

export default LeaderboardServices;
