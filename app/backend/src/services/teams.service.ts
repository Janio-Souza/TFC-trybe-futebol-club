import { ModelStatic } from 'sequelize';
import Teams from '../database/models/TeamsModel';
import IServiceTeams from '../interfaces/IService.Teams';

class TeamsServices implements IServiceTeams {
  protected model: ModelStatic<Teams> = Teams;

  async readAll(): Promise<Teams[]> {
    return this.model.findAll();
  }
}

export default TeamsServices;
