const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { describe, it } = require('mocha');

describe('calculate numbers', () => {
    it('should return 6 when adding 1 and 5', () => {
        assert.equal(calculateNumber(1, 5, 'SUM'), 6); 
    });
    it('should return 0 when subtracting 5 from 5', () => {
        assert.equal(calculateNumber(5, 5, 'SUBTRACT'), 0); 
    });
    it('should return 1 when dividing 5 by 5', () => {
        assert.equal(calculateNumber(5, 5, 'DIVIDE'), 1); 
    });
});