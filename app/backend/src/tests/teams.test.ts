import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { Model } from 'sequelize';
import Teams from '../database/models/TeamsModel'
import TeamsServices from '../services/teams.service';
import { app } from '../app'
import { after } from 'node:test';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /teams', () => {

  after(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('Verificando retorno de todos os times', async () => {
    const outputMock: Teams[] = [new Teams({
      id: 1,
      teamName: 'Time1',
    })];

    sinon.stub(Model, 'findAll').resolves(outputMock);
    const service = new TeamsServices();
    const result = await service.readAll();
    
    expect(result).to.be.equal(outputMock);
  });

  it('Retorna 200, com a lista de times', async () => {
    // const result = [{ id: 1, teamName: 'Time1' }];
    const  chaiHttpResponse = await chai
        .request(app).get('/teams');
    
    expect(chaiHttpResponse.status).to.be.equal(200);
    // console.log('log1', chaiHttpResponse.body);
    // console.log('log2', result);
    // expect(chaiHttpResponse.body).to.equal(result);
  });
});
