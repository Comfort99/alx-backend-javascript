const chai = require('chai');
const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('adding floating numbers', () => {
            chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('type == "SUBTRACT"', () => {
        it('subtracting floating numbers', () => {
            chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    })

    describe('type == "DIVIDE"', () => {
        it('dividing a floating number with 0', () => {
            chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    })
});
