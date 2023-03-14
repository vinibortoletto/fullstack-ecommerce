import { expect } from 'chai';
import { Secret } from 'jsonwebtoken';
import TokenHandler from '../../../api/utils/TokenHandler';
import { usersMock } from '../../mocks';

describe('TokenHandler', function () {
  describe('generate method', function () {
    it('should generate new token', async function () {
      const token = TokenHandler.generate(usersMock.login);
      expect(typeof token).to.equal('string');
    });
  });

  describe('decode method', function () {
    it('should decode token and return user info', async function () {
      const token = TokenHandler.generate(usersMock.login);
      const decodedUserInfo = TokenHandler.decode(token);
      expect(decodedUserInfo).to.haveOwnProperty('email');
      expect(decodedUserInfo).to.haveOwnProperty('password');
    });
  });
});
