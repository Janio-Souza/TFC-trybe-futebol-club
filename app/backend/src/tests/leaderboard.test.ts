import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Matches from '../database/models/MatchesModel'
import landerboardMock from './mocks/landerboards';
import { app } from '../app'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /landerboard', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('Retorna 200, com os placares dos times de casa', async () => {
    sinon.stub( Matches, 'findAll').resolves(landerboardMock as unknown as Matches[]);

    const  chaiHttpResponse = await chai
        .request(app).get('/leaderboard/home');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(landerboardMock);
  });
});
