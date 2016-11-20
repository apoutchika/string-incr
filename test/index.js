"use strict";

var incrString = require('../');
var chai = require('chai');
chai.should();

describe('Test increment string', function(){

    it('Return first number', function(){
        incrString('hello').should.equal('hello 2');
        incrString('hello world').should.equal('hello world 2');
    });

    it('Return first number with separator', function(){
        incrString('hello', '-').should.equal('hello-2');
        incrString('hello world', '-').should.equal('hello world-2');
    });

    it('Return next numbers without separator', function(){
        incrString('hello 42', '-').should.equal('hello 43');
        incrString('hello world 42', '-').should.equal('hello world 43');
    });

    it('Change last number with space', function(){
        incrString('toto 2').should.equal('toto 3');
        incrString('toto 9').should.equal('toto 10');
        incrString('toto 10').should.equal('toto 11');
    });

    it('Change last number without space', function(){
        incrString('toto2').should.equal('toto3');
        incrString('toto9').should.equal('toto10');
        incrString('toto10').should.equal('toto11');
    });

    it('Like many numbers on name', function(){
        incrString('ligne 2 place 1').should.equal('ligne 2 place 2');
        incrString('ligne 42 place 42').should.equal('ligne 42 place 43');
        incrString('ligne 42 place 42').should.equal('ligne 42 place 43');
    });

    it("Return 1 when send empty or object parameter", function(){
        incrString().should.equal('1');
        incrString('').should.equal('1');
        incrString({}).should.equal('1');
        incrString(function(){}).should.equal('1');
    });

    it("Incremente number when send number", function(){
        incrString(3).should.equal(4);
        incrString(41).should.equal(42);
    });

    it("Readme usage works", function(){
        incrString('Hello world').should.equal('Hello world 2');
        incrString('Hello world 2').should.equal('Hello world 3');
        incrString('Hello world 42').should.equal('Hello world 43');

        incrString('Hello world42').should.equal('Hello world43');
        incrString('Hello world99').should.equal('Hello world100');
        incrString('Hello world-42').should.equal('Hello world-43');
        incrString('Hello world-4242').should.equal('Hello world-4243');

        incrString('Hello world', '-').should.equal('Hello world-2');
        incrString('Hello world 2', '-').should.equal('Hello world 3');
    });
});
