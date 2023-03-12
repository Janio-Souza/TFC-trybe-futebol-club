// import MatchesModel from '../database/models/MatchesModel';

export default interface ILeaderboard {
  getAllTimes(): Promise<{ times: object, matches: object }>
  // getById(id: number): Promise<MatchesModel[] | null | string>
}
