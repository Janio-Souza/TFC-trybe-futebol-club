import { ModelStatic } from 'sequelize';
import IdNotFoundError from '../errors/idNotFoundErro';
import Teams from '../database/models/TeamsModel';
import IServiceTeams from '../interfaces/IService.Teams';

const ID_NOT_FOUND = 'ID não existe';
class TeamsServices implements IServiceTeams {
  protected model: ModelStatic<Teams> = Teams;

  async readAll(): Promise<Teams[]> {
    return this.model.findAll();
  }

  async getById(id: number) : Promise<Teams | null> {
    const result = await this.model.findOne({ where: { id } });

    if (result === null) throw new IdNotFoundError(ID_NOT_FOUND);
    return result;
  }
}

export default TeamsServices;
