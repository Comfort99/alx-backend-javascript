const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
    it('whole numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('mixed numbers', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('rounding floating numbers a, b', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('rounding of floating numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(3.9999, 4.3999), 8);
    });
});