import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import App from '../../App';
import * as mocks from '../mocks';

chai.use(chaiHttp);
const { app } = new App();

describe('Integration test for /users route', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('should find all users', async function () {
    Sinon.stub(Model, 'findAll').resolves(mocks.findAll);
    const response = await chai.request(app).get('/users').send();
    expect(response.body).to.deep.equal(mocks.findAll);
    expect(response.status).to.equal(200);
  });

  it('should find user by id', async function () {
    Sinon.stub(Model, 'findByPk').resolves(mocks.findById);
    const response = await chai.request(app).get('/users/1').send({
      params: mocks.findById.id,
    });

    expect(response.body).to.deep.equal(mocks.findById);
    expect(response.status).to.equal(200);
  });
});
