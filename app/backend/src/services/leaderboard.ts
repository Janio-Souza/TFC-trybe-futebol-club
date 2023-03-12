// import teamsTotalPoints from './rules';

// export default class Leaderboard {
//   // private _name: string;
//   // private _totalPoints: number;
//   // private _totalGames: number;
//   // private _totalVictories: number;

//   static leaderboardMethode(timesObj: { times: { dataValues: { id: number, teamName: string} }[] , matches: object }) : object {
//     const leaderboard = timesObj.times
//       .map((teams: { dataValues: { id: number, teamName: string } }) => {
//         let totalPoints = 0;
//         const { dataValues: { id, teamName } } = teams;

//         timesObj.matches
//           .forEach((matches:
//           { dataValues: { homeTeamId: number, homeTeamGoals:number, awayTeamGoals: number } }) => {
//             const { homeTeamGoals, awayTeamGoals } = matches.dataValues;

//             if (matches.dataValues.homeTeamId === id) {
//               totalPoints += teamsTotalPoints(homeTeamGoals, awayTeamGoals);
//             }
//           });
//         return {
//           name: teamName,
//           totalPoints,
//         };
//       });
//     return leaderboard;
//   }

//   // leaderboard = timesObj.times
//   //   .map((teams: { dataValues: { id: number, teamName: string } }) => {
//   //     let totalPoints = 0;
//   //     const { dataValues: { id, teamName } } = teams;

//   //     timesObj.matches
//   //       .forEach((matches:
//   //       { dataValues: { homeTeamId: number, homeTeamGoals:number, awayTeamGoals: number } }) => {
//   //         const { homeTeamGoals, awayTeamGoals } = matches.dataValues;

//   //         if (matches.dataValues.homeTeamId === id) {
//   //           totalPoints += teamsTotalPoints(homeTeamGoals, awayTeamGoals);
//   //         }
//   //       });
//   //     return {
//   //       name: teamName,
//   //       totalPoints,
//   //     };
//   //   });
// }
