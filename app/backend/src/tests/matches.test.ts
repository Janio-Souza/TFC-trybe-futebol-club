import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Matches from '../database/models/MatchesModel'
import matches from './mocks/matches';
import { app } from '../app'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /matches', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('Retorna 200, com a lista de times', async () => {
    sinon.stub( Matches, 'findAll').resolves(matches as unknown as Matches[]);

    const  chaiHttpResponse = await chai
        .request(app).get('/matches');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(matches);
  });
});
