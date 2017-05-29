'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function () {
    it('should reverse number', function () {
        expect(app.reverseNumber(1337)).to.eql(7331);
    });

});

describe('returnOnlyLetter', function () {
    it('should return \'cos\'', function () {
        expect(app.returnOnlyLetter('cos')).to.eql('cos');
    });

});

describe('isEmail', function () {
    it('should return true', function () {
        expect(app.isEmail('23b234234@wp.pl')).to.eql(true);
    });

});