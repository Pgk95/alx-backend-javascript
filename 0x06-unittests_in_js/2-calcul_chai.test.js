const { describe, it } = require("mocha");
const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
    describe("SUM", function() {
        it("should return 4", function() {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
        it("should return 5", function() {
            expect(calculateNumber('SUM', 1.6, 3)).to.equal(5);
        });
    });
    describe("SUBTRACT", function() {
        it("should return -2", function() {
            expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        });
        it("should return -1", function() {
            expect(calculateNumber('SUBTRACT', 1.6, 3)).to.equal(-1);
        });
    });
    describe("DIVIDE", function() {
        it("should return 1", function() {
            expect(calculateNumber('DIVIDE', 6, 6)).to.equal(1);
        });
        it("should return 2", function() {
            expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
        });
        it("should return Error", function() {
            expect(calculateNumber('DIVIDE', 1.6, 0)).to.equal("Error");
        });
    });
});