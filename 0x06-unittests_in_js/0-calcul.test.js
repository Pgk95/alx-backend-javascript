const assert = require('assert');
function calculateNumber(a, b) {
    return Math.round(a) + Math.round(b);
}

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
});