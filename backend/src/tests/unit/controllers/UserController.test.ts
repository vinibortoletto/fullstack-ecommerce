import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import UserController from '../../../api/controllers/UserController';
import UserService from '../../../api/services/UserService';
import { CREATED, OK } from '../../../api/utils/httpErrorCodes';
import { usersMock } from '../../mocks';

describe('Unit tests for UserController', function () {
  const userService = new UserService();
  const userController = new UserController(userService);

  afterEach(function () {
    sinon.restore();
  });

  describe('findAll method', function () {
    it('should find all users', async function () {
      const res = {} as Response;
      const req = {} as Request;
      const next = sinon.stub();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(userService, 'findAll').resolves(usersMock.userList);
      await userController.findAll(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(usersMock.userList)).to.be
        .true;
    });
  });

  describe('findById method', function () {
    it('should find user by id', async function () {
      const res = {} as Response;
      const req = { params: { id: 1 } } as unknown as Request;
      const next = sinon.stub();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(userService, 'findById').resolves(usersMock.user);
      await userController.findById(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(OK)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(usersMock.user)).to.be
        .true;
    });
  });

  describe('create method', function () {
    it('should create user', async function () {
      const res = {} as Response;
      const req = {
        body: { ...usersMock.newUserBody },
      } as unknown as Request;
      const next = sinon.stub();

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(userService, 'create').resolves(usersMock.newUser);
      await userController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(CREATED)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(usersMock.newUser)).to.be
        .true;
    });
  });
});
