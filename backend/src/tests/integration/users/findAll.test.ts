import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import App from '../../../App';
import * as mocks from '../../mocks'

chai.use(chaiHttp);
const { app } = new App();

describe('GET /users', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('should find all users', async function () {
    Sinon.stub(Model, 'findAll').resolves(mocks.findAll);
    const response = await chai.request(app).get('/users').send();
    expect(response.body).to.deep.equal(mocks.findAll);
    expect(response.status).to.equal(200);
  });
});
