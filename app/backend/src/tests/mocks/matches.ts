const matches = [
  { dataValues: {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  }},
  { dataValues: {
    "id": 2,
    "homeTeamId": 9,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  }},
  { dataValues: {
    "id": 3,
    "homeTeamId": 4,
    "homeTeamGoals": 3,
    "awayTeamId": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  }},
  { dataValues: {
    "id": 4,
    "homeTeamId": 3,
    "homeTeamGoals": 0,
    "awayTeamId": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }},
  { dataValues: {
    "id": 5,
    "homeTeamId": 7,
    "homeTeamGoals": 1,
    "awayTeamId": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  }},
  { dataValues: {
    "id": 6,
    "homeTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamId": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  }},
  { dataValues: {
    "id": 7,
    "homeTeamId": 12,
    "homeTeamGoals": 2,
    "awayTeamId": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  }},
  { dataValues: {
    "id": 8,
    "homeTeamId": 15,
    "homeTeamGoals": 0,
    "awayTeamId": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }},
  { dataValues: {
    "id": 9,
    "homeTeamId": 1,
    "homeTeamGoals": 0,
    "awayTeamId": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  }},
  { dataValues: {
    "id": 10,
    "homeTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamId": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  }},
  { dataValues: {
    "id": 11,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  }},
  { dataValues: {
    "id": 12,
    "homeTeamId": 6,
    "homeTeamGoals": 0,
    "awayTeamId": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  }},
  { dataValues: {
    "id": 13,
    "homeTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamId": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  }},
  { dataValues: {
    "id": 14,
    "homeTeamId": 14,
    "homeTeamGoals": 2,
    "awayTeamId": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  }},
  { dataValues: {
    "id": 15,
    "homeTeamId": 10,
    "homeTeamGoals": 0,
    "awayTeamId": 15,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  }},
  { dataValues: {
    "id": 16,
    "homeTeamId": 11,
    "homeTeamGoals": 0,
    "awayTeamId": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  }},
  { dataValues: {
    "id": 17,
    "homeTeamId": 1,
    "homeTeamGoals": 2,
    "awayTeamId": 8,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  }},
  { dataValues: {
    "id": 18,
    "homeTeamId": 12,
    "homeTeamGoals": 4,
    "awayTeamId": 5,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  }},
  { dataValues: {
    "id": 19,
    "homeTeamId": 11,
    "homeTeamGoals": 2,
    "awayTeamId": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }},
  { dataValues: {
    "id": 20,
    "homeTeamId": 7,
    "homeTeamGoals": 0,
    "awayTeamId": 9,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  }},
  { dataValues: {
    "id": 21,
    "homeTeamId": 6,
    "homeTeamGoals": 3,
    "awayTeamId": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  }},
  { dataValues: {
    "id": 22,
    "homeTeamId": 4,
    "homeTeamGoals": 3,
    "awayTeamId": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  }},
  { dataValues: {
    "id": 23,
    "homeTeamId": 15,
    "homeTeamGoals": 2,
    "awayTeamId": 16,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  }},
  { dataValues: {
    "id": 24,
    "homeTeamId": 10,
    "homeTeamGoals": 2,
    "awayTeamId": 14,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  }},
  { dataValues: {
    "id": 25,
    "homeTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamId": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  }},
  { dataValues: {
    "id": 26,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }},
  { dataValues: {
    "id": 27,
    "homeTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamId": 15,
    "awayTeamGoals": 2,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  }},
  { dataValues: {
    "id": 28,
    "homeTeamId": 16,
    "homeTeamGoals": 3,
    "awayTeamId": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  }},
  { dataValues: {
    "id": 29,
    "homeTeamId": 9,
    "homeTeamGoals": 0,
    "awayTeamId": 4,
    "awayTeamGoals": 4,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  }},
  { dataValues: {
    "id": 30,
    "homeTeamId": 3,
    "homeTeamGoals": 0,
    "awayTeamId": 12,
    "awayTeamGoals": 4,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  }},
  { dataValues: {
    "id": 31,
    "homeTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamId": 10,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  }},
  { dataValues: {
    "id": 32,
    "homeTeamId": 14,
    "homeTeamGoals": 5,
    "awayTeamId": 11,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  }},
  { dataValues: {
    "id": 33,
    "homeTeamId": 1,
    "homeTeamGoals": 1,
    "awayTeamId": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Avaí/Kindermann"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  }},
  { dataValues: {
    "id": 34,
    "homeTeamId": 9,
    "homeTeamGoals": 3,
    "awayTeamId": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  }},
  { dataValues: {
    "id": 35,
    "homeTeamId": 10,
    "homeTeamGoals": 1,
    "awayTeamId": 5,
    "awayTeamGoals": 3,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Minas Brasília"
    },
    "awayTeam": {
      "teamName": "Cruzeiro"
    }
  }},
  { dataValues: {
    "id": 36,
    "homeTeamId": 2,
    "homeTeamGoals": 0,
    "awayTeamId": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Bahia"
    },
    "awayTeam": {
      "teamName": "Flamengo"
    }
  }},
  { dataValues: {
    "id": 37,
    "homeTeamId": 15,
    "homeTeamGoals": 0,
    "awayTeamId": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São José-SP"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  }},
  { dataValues: {
    "id": 38,
    "homeTeamId": 14,
    "homeTeamGoals": 2,
    "awayTeamId": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Santos"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  }},
  { dataValues: {
    "id": 39,
    "homeTeamId": 3,
    "homeTeamGoals": 2,
    "awayTeamId": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Botafogo"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  }},
  { dataValues: {
    "id": 40,
    "homeTeamId": 12,
    "homeTeamGoals": 4,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  }},
  { dataValues: {
    "id": 41,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  }},
  { dataValues: {
    "id": 42,
    "homeTeamId": 6,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }},
  { dataValues: {
    "id": 43,
    "homeTeamId": 11,
    "homeTeamGoals": 0,
    "awayTeamId": 10,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Napoli-SC"
    },
    "awayTeam": {
      "teamName": "Minas Brasília"
    }
  }},
  { dataValues: {
    "id": 44,
    "homeTeamId": 7,
    "homeTeamGoals": 2,
    "awayTeamId": 15,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "São José-SP"
    }
  }},
  { dataValues: {
    "id": 45,
    "homeTeamId": 5,
    "homeTeamGoals": 1,
    "awayTeamId": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Cruzeiro"
    },
    "awayTeam": {
      "teamName": "Botafogo"
    }
  }},
  { dataValues: {
    "id": 46,
    "homeTeamId": 4,
    "homeTeamGoals": 1,
    "awayTeamId": 12,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  }},
  { dataValues: {
    "id": 47,
    "homeTeamId": 8,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  }},
  { dataValues: {
    "id": 48,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }}
];

export default matches;