const utils = require('./utils')

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const totalCost = utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${totalCost}`)
};

module.exports = sendPaymentRequestToApi;
