'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function () {
    it('should reverse number', function () {
        expect(app.reverseNumber(1337)).to.eql(7331);
    });

    it('should return false', function () {
        expect(app.reverseNumber('cos')).to.eql(false);
    })

    it('should return false', function () {
        expect(app.reverseNumber('@!$')).to.eql(false);
    })

    it('should return 0x3D', function () {
        expect(app.reverseNumber(0x10)).to.eql(0x3D);
    })
});

describe('returnOnlyLetter', function () {
    it('should return \'cos\'', function () {
        expect(app.returnOnlyLetter('cos')).to.eql('cos');
    });

    it('should return \'lt\'', function () {
        expect(app.returnOnlyLetter('l33t./$%@™')).to.eql('lt');
    })

    it('should return false', function () {
        expect(app.returnOnlyLetter(0x0E)).to.eql(false);
    })

    it('should return \'\'', function () {
        expect(app.returnOnlyLetter('')).to.eql('');
    })

    it('should return \'\'', function () {
        expect(app.returnOnlyLetter('')).to.eql('');
    })
});

describe('isEmail', function () {
    it('should return true', function () {
        expect(app.isEmail('habababababa@wp.pl')).to.eql(true);
    });

    it('should return true', function () {
        expect(app.isEmail('habababababa.habababababa')).to.eql(false);
    });
});