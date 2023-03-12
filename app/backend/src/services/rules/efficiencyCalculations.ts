const efficiencyCalculations = (totalPoints: number, totalGames: number) => {
//  fórmula: [P / (J * 3)] * 100, onde:
// P: Total de Pontos;
// J: Total de Jogos.

  const J = totalGames * 3;
  const X = totalPoints / J;
  return X * 100;
};

export default efficiencyCalculations;
