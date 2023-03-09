import { expect } from 'chai';
import { Request, Response } from 'express';
import { Model } from 'sequelize';
import sinon from 'sinon';
import UserController from '../../../api/controllers/UserController';
import UserService from '../../../api/services/UserService';
import * as mocks from '../../mocks';

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
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      sinon.stub(userService, 'findAll').resolves(mocks.findAll);
      await userController.findAll(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(mocks.findAll)).to.be
        .true;
    });
  });
});
