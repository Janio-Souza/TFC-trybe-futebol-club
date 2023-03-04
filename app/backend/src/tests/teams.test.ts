// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// import Example from '../database/models/ExampleModel'; //Model Example
// import Teams from '../database/models/TeamsModel'
// import teamsMock from './mocks/teams';

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Tesnatando rota /teams', () => {
//   /**
//    * Exemplo do uso de stubs com tipos
//    */

//   let chaiHttpResponse: Response;

//   before(async () => {
//     sinon
//       .stub(Teams, "findAll")
//       .resolves({
//         ...<typeof teamsMock>
//       } as Teams);
//   });

//   after(()=>{
//     (Teams.findAll as sinon.SinonStub).restore();
//   })

//   it('...', async () => {
//     chaiHttpResponse = await chai
//        .request(app)
//        ...

//     expect(...)
//   });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });
