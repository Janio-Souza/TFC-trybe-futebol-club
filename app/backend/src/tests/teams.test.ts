import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Teams from '../database/models/TeamsModel'
import { app } from '../app'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /teams', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('Retorna 200, com a lista de times', async () => {
    const result = [{ id: 1, teamName: 'Time1' }];

    sinon.stub(Teams, 'findAll').resolves(result as Teams[]);

    const  chaiHttpResponse = await chai
        .request(app).get('/teams');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(result);
  });
});
