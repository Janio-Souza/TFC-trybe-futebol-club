export default interface ILeaderboard {
  getAllTimes(): Promise<{ times: object, matches: object }>
}
