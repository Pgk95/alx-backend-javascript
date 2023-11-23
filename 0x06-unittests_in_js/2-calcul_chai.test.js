const {describe, it} = require("mocha");
const expect = require("chai").expect;
const calculateNumber = require("./2-calcul");

describe("calculateNumber()", function () {
    it('should return the sum of two numbers', () => {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should return the difference of two numbers', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 2.2)).to.equal(-1);
    });

    it('should return the quotient of two numbers', () => {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('should return an error message when dividing by zero', () => {
        expect(calculateNumber('DIVIDE', 1.7, 0)).to.equal('Error');
    });

    it('should return an error message when dividing by zero', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});