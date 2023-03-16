import IboardTimes from '../interfaces/IboardTimes';
import { efficiencyCalculations } from './rules';

interface boards {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
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

const newLeaderboards = (awayLeaderboard: boards[], homeBoards: boards) => {
  awayLeaderboard
    .forEach((awayBoards) => {
      if (awayBoards.name === homeBoards.name) {
        totalPoints = awayBoards.totalPoints + homeBoards.totalPoints;
        totalVictories = awayBoards.totalVictories + homeBoards.totalVictories;
        totalGames = awayBoards.totalGames + homeBoards.totalGames;
        totalDraws = awayBoards.totalDraws + homeBoards.totalDraws;
        totalLosses = awayBoards.totalLosses + homeBoards.totalLosses;
        goalsFavor = awayBoards.goalsFavor + homeBoards.goalsFavor;
        goalsOwn += awayBoards.goalsOwn + homeBoards.goalsOwn;
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

const leaderboard = async (homeLeaderboard: any, awayLeaderboard: any) => {
  const leaderboards = homeLeaderboard.map((homeBoards: boards) => {
    const { name } = homeBoards;

    resetPoints();
    newLeaderboards(awayLeaderboard, homeBoards);

    return {
      name,
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

  return ordination(leaderboards);
};

export default leaderboard;
