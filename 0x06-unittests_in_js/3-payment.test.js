const Sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPayentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = Sinon.spy(utils, 'calculateNumber');
    });

    afterEach (() => {
        spy.restore()
    });

    it('should call utils.calculateNuber with correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        Sinon.assert.calledWith(spy, 'SUM', 100, 20);
    });
});
