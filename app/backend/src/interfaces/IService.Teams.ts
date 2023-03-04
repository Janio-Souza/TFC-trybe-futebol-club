// import ITeams from './ITeams';
import TeamsModel from '../database/models/TeamsModel';

export default interface IServiceTeams {
  readAll(): Promise <TeamsModel[]>
}
