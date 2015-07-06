'use strict';

var assert = require('assert'),
    encryptDecrypt = require('../../../app/util/encryptDecrypt');

describe('encryptDecrypt', function () {

    it('should be able to encrypt', function (done) {
        encryptDecrypt.encrypt('somePassword', function (encrypted) {
            assert.notEqual(encrypted.content, undefined);
            done();
        });
    });

    it('should be able to decrypt', function (done) {
        var password = 'somePassword';

        encryptDecrypt.encrypt('somePassword', function (encrypted) {
            assert.equal(encryptDecrypt.decrypt(encrypted), password);
            done();
        });
    });
});