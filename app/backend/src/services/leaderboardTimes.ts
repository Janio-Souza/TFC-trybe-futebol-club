import IboardTimes from '../interfaces/IboardTimes';
import {
  teamsTotalPoints,
  efficiencyCalculations,
} from './rules';

interface teams {
  dataValues: { id: number, teamName: string }
}

interface matches {
  dataValues: {
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals:number,
    awayTeamGoals: number,
  }
}

let totalPoints = 0;
let totalGames = 0;
let totalVictories = 0;
let totalDraws = 0;
let totalLosses = 0;
let goalsFavor = 0;
let goalsOwn = 0;
let goalsBalance = 0;
let efficiency = 0;

const resetPoints = () => {
  totalPoints = 0;
  totalGames = 0;
  totalVictories = 0;
  totalDraws = 0;
  totalLosses = 0;
  goalsFavor = 0;
  goalsOwn = 0;
  goalsBalance = 0;
  efficiency = 0;
};

const homeForMatches = (matches: matches[], id: number) => {
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
        goalsBalance = goalsFavor - goalsOwn;
        efficiency = efficiencyCalculations(totalPoints, totalGames);
      }
    });
};

const awayForMatches = (matches: matches[], id: number) => {
  matches
    .forEach((matche) => {
      const { homeTeamGoals, awayTeamGoals } = matche.dataValues;

      if (matche.dataValues.awayTeamId === id) {
        const matchResults = teamsTotalPoints(awayTeamGoals, homeTeamGoals);
        totalPoints += matchResults.points;
        totalVictories += matchResults.victoria;
        totalGames += 1;
        totalDraws += matchResults.draw;
        totalLosses += matchResults.loss;
        goalsFavor += awayTeamGoals;
        goalsOwn += homeTeamGoals;
        goalsBalance = goalsFavor - goalsOwn;
        efficiency = efficiencyCalculations(totalPoints, totalGames);
      }
    });
};

const ordination = (arrayBoard: IboardTimes[]) => {
  const result = arrayBoard.sort((a, b) => b.goalsFavor - a.goalsFavor) // Organiza por gols a favor
    .sort((a, b) => b.goalsBalance - a.goalsBalance) // Organiza por golsBalance "saldo de gols"
    .sort((a, b) => b.totalVictories - a.totalVictories) // Organiza por total de vitorias
    .sort((a, b) => b.totalPoints - a.totalPoints); // Organizar por total de pontos.
  return result;
};

const homeLeaderboardTimes = async (timesObj: any) => {
  const leaderboard = timesObj.times.map((teams: teams) => {
    const { dataValues: { id, teamName } } = teams;

    resetPoints();
    homeForMatches(timesObj.matches, id);

    return {
      name: teamName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  });

  return ordination(leaderboard);
};

const awayLeaderboardTimes = async (timesObj: any) => {
  const leaderboard = timesObj.times.map((teams: teams) => {
    const { dataValues: { id, teamName } } = teams;

    resetPoints();
    awayForMatches(timesObj.matches, id);

    return {
      name: teamName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  });

  return ordination(leaderboard);
};

export { homeLeaderboardTimes, awayLeaderboardTimes };
