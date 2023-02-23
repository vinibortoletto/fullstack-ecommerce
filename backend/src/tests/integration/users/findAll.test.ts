import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import App from '../../../App';
import * as mock from './findAll.mock';

chai.use(chaiHttp);
const { app } = new App();

describe('GET /users', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('should find all users', async function () {
    Sinon.stub(Model, 'findAll').resolves(mock.findAll);
    const response = await chai.request(app).get('/users').send();
    expect(response.body).to.deep.equal(mock.findAll);
    expect(response.status).to.equal(200);
  });
});
