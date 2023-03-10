import MatchesModel from '../database/models/MatchesModel';

export default interface IMatches {
  getAll(): Promise<MatchesModel[]>
  updateProgress(id: number): Promise<string>
}
