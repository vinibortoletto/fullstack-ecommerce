import { triggerAsyncId } from 'async_hooks';
import { expect } from 'chai';
import { Model } from 'sequelize';
import sinon from 'sinon';
import NotFound from '../../../api/errors/NotFound';
import UserService from '../../../api/services/UserService';
import * as mocks from '../../mocks';

describe('Unit tests for UserService', function () {
  const userService = new UserService();

  afterEach(function () {
    sinon.restore();
  });

  describe('findAll', function () {
    it('should find all users', async function () {
      sinon.stub(Model, 'findAll').resolves(mocks.findAll);
      const result = await userService.findAll();
      expect(result).to.deep.equal(mocks.findAll);
    });
  });

  describe('findById', function () {
    it('should find user by id', async function () {
      sinon.stub(Model, 'findByPk').resolves(mocks.findById);
      const result = await userService.findById(mocks.findById.id);
      expect(result).to.deep.equal(mocks.findById);
    });

    it('should fail to find user by id', async function () {
      sinon.stub(Model, 'findByPk').resolves(null);

      try {
        await userService.findById(999);
      } catch (e) {
        const error = e as Error;
        expect(error).to.be.instanceOf(NotFound);
        expect(error.message).to.equal('User not found');
      }
    });
  });
});
