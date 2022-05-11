const chai = require('chai');
const expect = chai.expect;

describe('Hello world', function(){
    it('should be 11 characters long', function(){
        expect( 'Hello world' ).to.have.length( 11 );
    });

});

describe('helloWorld()', function(){
    it('should return "Hello world"', function(){
        expect( helloWorld() ).to.be.equal( 'Hello world' );
    });
});