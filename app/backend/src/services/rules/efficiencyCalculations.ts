const efficiencyCalculations = (totalPoints: number, totalGames: number) => {
//  fórmula: [P / (J * 3)] * 100, onde:
// P: Total de Pontos;
// J: Total de Jogos.

  const J = totalGames * 3;
  const X = totalPoints / J;
  const result = X * 100;
  return Number(result.toFixed(2));
};

export default efficiencyCalculations;
