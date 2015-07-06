'use strict';

var encryptDecrypt = require('./app/util/encryptDecrypt'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

var emailCreds = {
    email: process.argv[2],
    password: process.argv[3]
};

encryptDecrypt.encrypt(emailCreds.password, function (encrypted) {
    emailCreds.password = encrypted;
    mkdirp('config', function (err) {
        if (err) {
            console.error(err);
        }
        fs.writeFile('config/email.js', JSON.stringify(emailCreds), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('Email Credintials written to config/email.js');
            console.log(emailCreds.email + ' : ' + encryptDecrypt.decrypt(emailCreds.password));
        });
    });
});