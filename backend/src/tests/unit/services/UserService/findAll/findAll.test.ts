import { expect } from 'chai';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import UserService from '../../../../../api/services/UserService';
import * as mock from './findAll.mock';

describe('UserService.findAll', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('should find all users', async function () {
    Sinon.stub(Model, 'findAll').resolves(mock.findAll);
    const userService = new UserService();
    const result = await userService.findAll();
    expect(result).to.deep.equal(mock.findAll);
  });
});
