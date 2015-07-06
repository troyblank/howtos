'use strict';

var crypto = require('crypto'),
    algorithm = 'aes-256-gcm',
    password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY';

exports.encrypt = function (text, callback) {
    crypto.randomBytes(6, function (ex, buf) {
        var iv = buf.toString('hex'),
            cipher = crypto.createCipheriv(algorithm, password, iv),
            encrypted = cipher.update(text, 'utf8', 'hex'),
            tag;

        encrypted += cipher.final('hex');
        tag = cipher.getAuthTag();

        callback({
            content: encrypted,
            tag: tag,
            iv: iv
        });
    });
};

exports.decrypt = function (encrypted) {
    var decipher = crypto.createDecipheriv(algorithm, password, encrypted.iv),
        dec;

    decipher.setAuthTag(encrypted.tag.type === 'Buffer' ? new Buffer(encrypted.tag.data) : encrypted.tag);
    dec = decipher.update(encrypted.content, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
};
