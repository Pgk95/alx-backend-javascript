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
    it('should return error when dividing 5 by 0', () => {
        assert.equal(calculateNumber(5, 0, 'DIVIDE'), 'Error'); 
    });
    it('should return 0 when dividing 0 by 5', () => {
        assert.equal(calculateNumber(0, 5, 'DIVIDE'), 0); 
    });
    it('should return 0 when adding 0 and 0', () => {
        assert.equal(calculateNumber(0, 0, 'SUM'), 0); 
    });
    it('should return 0 when subtracting 0 from 0', () => {
        assert.equal(calculateNumber(0, 0, 'SUBTRACT'), 0); 
    });
    it('should return 0 when dividing 0 by 0', () => {
        assert.equal(calculateNumber(0, 0, 'DIVIDE'), 'Error'); 
    });
    it('should return 6 when adding 1.4 and 4.5', () => {
        assert.equal(calculateNumber(1.4, 4.5, 'SUM'), 6); 
    });
    it('should return -4 when subtracting 1.4 from 4.5', () => {
        assert.equal(calculateNumber(1.4, 4.5, 'SUBTRACT'), -4); 
    });
    it('should return 0 when dividing 0 by 1', () => {
        assert.equal(calculateNumber(1.4, 0, 'DIVIDE'), 'Error'); 
    });
    it('should return 6 when dividing 1.4 and 4.5', () => {
        assert.equal(calculateNumber(1.4, 4.5, 'DIVIDE'), 0.2); 
    });
});