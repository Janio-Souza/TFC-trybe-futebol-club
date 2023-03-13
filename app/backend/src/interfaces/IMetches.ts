import MatchesModel from '../database/models/MatchesModel';

export default interface IMatches {
  getAll(): Promise<MatchesModel[]>
  updateProgress(id: number): Promise<string>
  updateGame(id: number, req: object): Promise<string>
  insertGame(req: object): Promise<{ status: number, message: object }>
}
