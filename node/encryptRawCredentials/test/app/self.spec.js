var assert = require('assert');
var sinon = require('sinon');
require('../helpers/assert.helper.js')(assert);

var selfTest = (function () {
    'use strict';

    return {
        callback: function () {
            return true;
        }
    };
}());

describe('self', function () {
    'use strict';

    it('should be able to assert', function () {
        assert.equal(true, true);
        assert.notEqual(false, true);
    });

    it('should be able to spy with sinon', function () {
        var callback = sinon.spy(selfTest, 'callback');

        selfTest.callback();

        assert.equal(callback.called, true);
    });

    it('should be able to use assert helpers', function () {
        assert.contains('The big fox was there.', 'fox');
        assert.notContains('Octopi everywhere!', 'chameleon');
    });
});