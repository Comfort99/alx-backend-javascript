const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let ConsoleSpy;

    beforeEach(() => {
        ConsoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        ConsoleSpy.restore();
    });

    it('should log the correct total and be called once for (100, 20)', () => {
        sendPaymentRequestToApi(20, 100);
        sinon.assert.calledWith(ConsoleSpy, 'The total is: 120');
        sinon.assert.calledOnce(ConsoleSpy);
    });

    it('should log the correct total and be called once for (10, 10)', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWith(ConsoleSpy, 'The total is: 20');
        sinon.assert.calledOnce(ConsoleSpy);
    });
});
