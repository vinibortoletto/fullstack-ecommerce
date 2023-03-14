import { expect } from 'chai';
import { Model } from 'sequelize';
import sinon from 'sinon';
import { Conflict } from '../../../api/errors';
import { NotFound } from '../../../api/errors';
import { Unauthorized } from '../../../api/errors';
import UserService from '../../../api/services/UserService';
import { userNotFound } from '../../../api/utils/errorMessages';
import { CONFLICT, UNAUTHORIZED } from '../../../api/utils/httpStatusCodes';
import { usersMock } from '../../mocks';

describe('Unit tests for UserService', function () {
  const userService = new UserService();

  afterEach(function () {
    sinon.restore();
  });

  describe('findAll', function () {
    it('should find all users', async function () {
      sinon.stub(Model, 'findAll').resolves(usersMock.userList);
      const result = await userService.findAll();
      expect(result).to.deep.equal(usersMock.userList);
    });
  });

  describe('findById', function () {
    it('should find user by id', async function () {
      sinon.stub(Model, 'findByPk').resolves(usersMock.user);
      const result = await userService.findById(usersMock.user.id);
      expect(result).to.deep.equal(usersMock.user);
    });

    it('should fail to find user by id if it does not exists in the database', async function () {
      sinon.stub(Model, 'findByPk').resolves(null);

      try {
        const result = await userService.findById(999);
      } catch (e) {
        const error = e as Error;
        expect(error).to.be.instanceOf(NotFound);
        expect(error.message).to.equal(userNotFound);
      }
    });
  });

  describe('create method', function () {
    it('should create a new user', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      sinon.stub(Model, 'create').resolves(usersMock.newUser);
      const result = await userService.create(usersMock.newUser);
      expect(result).to.deep.equal(usersMock.newUser);
    });

    it('should fail to create a new user with an email that already exists', async function () {
      sinon.stub(Model, 'findOne').resolves(usersMock.user);

      try {
        await userService.create(usersMock.newUser);
      } catch (e) {
        const error = e as Error;
        expect(error).to.be.instanceOf(Conflict);
        expect(error.stack).to.equal(String(CONFLICT));
        expect(error.message).to.equal('Já existe um usuário com esse email');
      }
    });
  });

  describe('login method', function () {
    it('should fail to login if cannot find email in the database', async function () {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        await userService.login(usersMock.login);
      } catch (e) {
        const error = e as Error;
        expect(error).to.be.instanceOf(Unauthorized);
        expect(error.stack).to.equal(String(UNAUTHORIZED));
        expect(error.message).to.equal(userNotFound);
      }
    });
  });
});
