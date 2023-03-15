import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Matches from '../database/models/MatchesModel'
import landerboardMock from './mocks/landerboards';
import leaderboardTimes from '../services/leaderboardTimes';
import matches from './mocks/matches';
import Teams from '../database/models/TeamsModel'
import times from './mocks/teamsMock'
import { app } from '../app'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /landerboard', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('Retorna 200, com os placares dos times de casa', async () => {
    sinon.stub( Matches, 'findAll').resolves(matches as unknown as Matches[]);
    sinon.stub(Teams, 'findAll').resolves(times as unknown as Teams[]);
    sinon.stub(leaderboardTimes({ times, matches }));

    const  chaiHttpResponse = await chai
        .request(app).get('/leaderboard/home');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(landerboardMock);
  });
});
