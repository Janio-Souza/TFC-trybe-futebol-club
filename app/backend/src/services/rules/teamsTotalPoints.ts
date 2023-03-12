const teamsTotalPoints = (teamOneGoals: number, teamTwoGoals: number) => {
  if (teamOneGoals - teamTwoGoals >= 1) {
    return { points: 3, victoria: 1, loss: 0, draw: 0 };
  }
  if (teamOneGoals - teamTwoGoals < 0) {
    return { points: 0, victoria: 0, loss: 1, draw: 0 };
  }
  return { points: 1, victoria: 0, loss: 0, draw: 1 };
};

export default teamsTotalPoints;
