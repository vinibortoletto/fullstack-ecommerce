import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import App from '../../App';
import { usersMock } from '../mocks';

chai.use(chaiHttp);
const { app } = new App();

describe('Integration test for /users route', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('should find all users', async function () {
    Sinon.stub(Model, 'findAll').resolves(usersMock.userList);
    const response = await chai.request(app).get('/users').send();
    expect(response.body).to.deep.equal(usersMock.userList);
    expect(response.status).to.equal(200);
  });

  it('should find user by id', async function () {
    Sinon.stub(Model, 'findByPk').resolves(usersMock.user);
    const response = await chai.request(app).get('/users/1').send({
      params: usersMock.user.id,
    });

    expect(response.body).to.deep.equal(usersMock.user);
    expect(response.status).to.equal(200);
  });

  it('should fail to find user by id', async function () {
    Sinon.stub(Model, 'findByPk').resolves(null);
    const response = await chai.request(app).get('/users/999').send({
      params: 999,
    });

    expect(response.status).to.equal(404);
  });
});
