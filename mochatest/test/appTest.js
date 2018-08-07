const assert = require('chai').assert;
const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function() {
    it('sayHello should return hello', function() {
        let result = sayHello();
        assert.equal(result, 'hello');
    });
    
    it('sayHello should return the type string', function() {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should be above 5', function() {
        let result = addNumbers(3, 4);
        assert.isAbove(result, 5);
    });

    it('addNumbers should return the type number', function() {
        let result = addNumbers(2, 5);
        assert.typeOf(result, 'number');
    });
});