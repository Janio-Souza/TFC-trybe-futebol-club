import {
  teamsTotalPoints,
  // efficiencyCalculations,
} from './rules';

// import teamsTotalPoints from './rules';

// [
//   matches {
//     dataValues: {
//       id: 1,
//       homeTeamId: 1,
//       homeTeamGoals: 1,
//       awayTeamId: 2,
//       awayTeamGoals: 2,
//       inProgress: false,
//       homeTeam: [teams],
//       awayTeam: [teams]
//     },
//    awayTeam: teams {
//    dataValues: [Object],
//    }
//    matches {
//     dataValues: {
//     id: 2,
//    ....

//   [
//   teams {
//     dataValues: { id: 15, teamName: 'São José-SP' },
//  ...

let totalPoints = 0;
let totalGames = 0;
let totalVictories = 0;
let totalDraws = 0;
let totalLosses = 0;
let goalsFavor = 0;
let goalsOwn = 0;
// let goalsBalance = 0;
// let efficiency = 0;

const resetPoints = () => {
  totalPoints = 0;
  totalGames = 0;
  totalVictories = 0;
  totalDraws = 0;
  totalLosses = 0;
  goalsFavor = 0;
  goalsOwn = 0;
  // goalsBalance = 0;
  // efficiency = 0;
};

// eslint-disable-next-line max-lines-per-function
const forMatches = (
  matches: { dataValues: { homeTeamId: number, homeTeamGoals:number, awayTeamGoals: number } }[],
  id: number,
) => {
  matches
    .forEach((matche) => {
      const { homeTeamGoals, awayTeamGoals } = matche.dataValues;

      if (matche.dataValues.homeTeamId === id) {
        const matchResults = teamsTotalPoints(homeTeamGoals, awayTeamGoals);
        totalPoints += matchResults.points;
        totalVictories += matchResults.victoria;
        totalGames += 1;
        totalDraws += matchResults.draw;
        totalLosses += matchResults.loss;
        goalsFavor += homeTeamGoals;
        goalsOwn += awayTeamGoals;
        // goalsBalance = goalsFavor - goalsOwn;
        // efficiency = efficiencyCalculations(totalPoints, totalGames);
      }
    });
};

// eslint-disable-next-line max-lines-per-function
const selectHomeTimes = async (timesObj: any) => {
  const leaderboard = timesObj.times
    .map((teams: { dataValues: { id: number, teamName: string } }) => {
      const { dataValues: { id, teamName } } = teams;

      resetPoints();
      forMatches(timesObj.matches, id);

      // name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn

      return {
        name: teamName,
        totalPoints,
        totalGames,
        totalVictories,
        totalDraws,
        totalLosses,
        goalsFavor,
        goalsOwn,
        // goalsBalance,
        // efficiency,
      };
    });

  return leaderboard;
};

export default selectHomeTimes;
