const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
    it('adding floating numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('subtracting floating numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('dividing a floating number with 0', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('parsing wrong opperation', () => {
        assert.strictEqual(calculateNumber('MULTIPLY', 2, 2), 0)
    });
});
