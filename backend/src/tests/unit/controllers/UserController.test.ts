import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { UserController } from '../../../api/controllers';
import { Unauthorized } from '../../../api/errors';
import { UserService } from '../../../api/services';
import { userNotFound } from '../../../api/utils/errorMessages';
import { CREATED, OK } from '../../../api/utils/httpStatusCodes';
import { usersMock } from '../../mocks';

chai.use(sinonChai);

describe('Unit tests for UserController', function () {
  const userService = new UserService();
  const userController = new UserController(userService);
  let res = {} as Response;
  let req = {} as Request;
  let next = sinon.stub();

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('findAll method', function () {
    it('should find all users', async function () {
      sinon.stub(userService, 'findAll').resolves(usersMock.userList);
      await userController.findAll(req, res, next);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith(usersMock.userList);
    });
  });

  describe('findById method', function () {
    it('should find user by id', async function () {
      req = { params: { id: 1 } } as unknown as Request;
      sinon.stub(userService, 'findById').resolves(usersMock.user);

      await userController.findById(req, res, next);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith(usersMock.user);
    });
  });

  describe('create method', function () {
    it('should create user', async function () {
      req.body = usersMock.newUserBody as unknown as Request;
      sinon.stub(userService, 'create').resolves(usersMock.newUser);

      await userController.create(req, res, next);

      expect(res.status).to.have.been.calledWith(CREATED);
      expect(res.json).to.have.been.calledWith(usersMock.newUser);
    });
  });

  describe('login method', function () {
    it('should be able to login', async function () {
      req.body = usersMock.login as unknown as Request;
      sinon.stub(userService, 'login').resolves({ token: 'token' });

      await userController.login(req, res, next);

      expect(res.status).to.have.been.calledWith(OK);
      expect(res.json).to.have.been.calledWith({ token: 'token' });
    });

    it('should fail to login if email does not exists on the database', async function () {
      const error = new Unauthorized(userNotFound);
      req.body = usersMock.login as unknown as Request;
      sinon.stub(userService, 'login').rejects(error);

      await userController.login(req, res, next);
      expect(next).to.have.been.calledWith(error);
    });
  });
});
