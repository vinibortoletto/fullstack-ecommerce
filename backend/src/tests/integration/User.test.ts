import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'sequelize';
import { stub, restore } from 'sinon';
import App from '../../App';
import { usersMock } from '../mocks';

chai.use(chaiHttp);
const { app } = new App();

describe('Integration test for /users route', function () {
  afterEach(function () {
    restore();
  });

  it('should find all users', async function () {
    stub(Model, 'findAll').resolves(usersMock.userList);

    const response = await chai.request(app).get('/users').send();

    expect(response.body).to.deep.equal(usersMock.userList);
    expect(response.status).to.equal(200);
  });

  it('should fail to find all users', async function () {
    stub(Model, 'findAll').throws(new Error('Internal Server Error'));

    const response = await chai.request(app).get('/users').send();

    expect(response.body).to.deep.equal({ message: 'Internal Server Error' });
    expect(response.status).to.equal(500);
  });

  it('should find user by id', async function () {
    stub(Model, 'findByPk').resolves(usersMock.user);

    const response = await chai.request(app).get('/users/1').send({
      params: usersMock.user.id,
    });

    expect(response.body).to.deep.equal(usersMock.user);
    expect(response.status).to.equal(200);
  });

  it('should fail to find user by id', async function () {
    stub(Model, 'findByPk').resolves(null);

    const response = await chai.request(app).get('/users/999').send({
      params: 999,
    });

    expect(response.status).to.equal(404);
  });
});
