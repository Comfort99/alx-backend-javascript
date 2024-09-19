const Sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let Stub, ConsoleSpy;

    beforeEach(() => {
        Stub = Sinon.stub(Utils, 'calculateNumber').returns(10)
        ConsoleSpy = Sinon.spy(console, 'log');
    });

    afterEach(() => {
        Stub.restore();
        ConsoleSpy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments and log the total', () => {
        sendPaymentRequestToApi(100, 20);
        Sinon.assert.calledWith(Stub, 'SUM', 100, 20);
        Sinon.assert.calledWith(ConsoleSpy, 'The total is: 10')
    });
});
