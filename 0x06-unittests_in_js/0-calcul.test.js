const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe('calculate numbers', () => {
    it('should return 4 when adding 2 and 2', () => {
        assert.equal(calculateNumber(2, 2), 4);
    });
    it('should return 5 when adding 2 and 3', () => {
        assert.equal(calculateNumber(2, 3), 5);
    });
    it('should return 5 when adding 2 and 2.7', () => {
        assert.equal(calculateNumber(2, 2.7), 5);
    });
    it('should return 4 when adding 1 and 3.7', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('should return 5 when adding 1.2 and 3.7', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6 when adding 1.5 and 3.7', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('should return 0 when adding 0.1 and 0.3', () => {
        assert.equal(calculateNumber(0.1, 0.3), 0);
    }); 
});