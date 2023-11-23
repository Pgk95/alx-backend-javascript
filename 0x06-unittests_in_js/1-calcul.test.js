const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { describe, it } = require('mocha');

describe('calculate numbers()', () => {
    it('should return 3 when adding 1 and 2', () => {
        assert.equal(calculateNumber(1, 2, 'SUM'), 3);
    });
    it('should return 2 when subtracting 6 and 8', () => {
        assert.equal(calculateNumber(8, 6, 'SUBTRACT'), 2);
    });
    it('should return -2 when subtracting 1.5 from 3.7', () => {
        assert.equal(calculateNumber(1.5, 3.7, 'SUBTRACT'), -2);
    });
    it('should return 0.14285714285714285 when dividing 1.4 by 7', () => {
        assert.equal(calculateNumber(1.4, 7, 'DIVIDE'), 0.14285714285714285);
    });
    it('should return Error when dividing by 0', () => {
        assert.equal(calculateNumber(1.4, 0, 'DIVIDE'), 'Error');
    });
    it('should return 5 when dividing by 10 by 2', () => {
        assert.equal(calculateNumber(10, 2, 'DIVIDE'), 5);
    });
});