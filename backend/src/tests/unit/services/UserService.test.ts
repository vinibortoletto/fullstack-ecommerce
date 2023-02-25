import { expect } from 'chai';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import UserService from '../../../api/services/UserService';
import * as mocks from '../../mocks';

describe('Unit tests for UserService', function () {
  afterEach(function () {
    Sinon.restore();
  });

  describe('findAll', function () {
    it('should find all users', async function () {
      Sinon.stub(Model, 'findAll').resolves(mocks.findAll);
      const userService = new UserService();
      const result = await userService.findAll();
      expect(result).to.deep.equal(mocks.findAll);
    });
  });
});
