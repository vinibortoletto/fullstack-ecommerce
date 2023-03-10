import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Model } from 'sequelize';
import { stub, restore } from 'sinon';
import {
  emailErrorMessages,
  fullNameErrorMessages,
  passwordErrorMessages,
} from '../../api/utils/errorMessages';
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

  describe('POST /users route', function () {
    it('should create user', async function () {
      stub(Model, 'create').resolves(usersMock.newUser);

      const response = await chai
        .request(app)
        .post('/users')
        .send({ ...usersMock.newUserBody });

      expect(response.status).to.equal(201);
    });

    it('should fail to create user if fullName is missing from request', async function () {
      stub(Model, 'create').resolves(undefined);

      const response = await chai
        .request(app)
        .post('/users')
        .send({ ...usersMock.newUserBodyWithoutFullName });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: fullNameErrorMessages.required,
      });
    });

    it('should fail to create user if email is missing from request', async function () {
      stub(Model, 'create').resolves(undefined);

      const response = await chai
        .request(app)
        .post('/users')
        .send({ ...usersMock.newUserBodyWithoutEmail });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: emailErrorMessages.required,
      });
    });

    it('should fail to create user if password is missing from request', async function () {
      stub(Model, 'create').resolves(undefined);

      const response = await chai
        .request(app)
        .post('/users')
        .send({ ...usersMock.newUserBodyWithoutPassword });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: passwordErrorMessages.required,
      });
    });
  });
});
