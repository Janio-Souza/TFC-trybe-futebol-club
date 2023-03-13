import { ModelStatic } from 'sequelize';
import ILeaderboard from '../interfaces/ILeaderboard';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';

class LeaderboardServices implements ILeaderboard {
  protected model: ModelStatic<MatchesModel> = MatchesModel;
  protected modelTeams: ModelStatic<TeamsModel> = TeamsModel;

  async getAllTimes(): Promise<{ times: object[], matches: object }> {
    const times = await this.modelTeams.findAll();
    const matches = await this.model.findAll({
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: [['team_name', 'name']] },
        { model: TeamsModel, as: 'awayTeam', attributes: [['team_name', 'name']] },
      ],
      where: { inProgress: false },
    });
    return { times, matches };
  }
}

export default LeaderboardServices;
