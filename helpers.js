var EC = protractor.ExpectedConditions;
module.exports = {
    waitForElementText: function (el, text, timeout) {
        return browser.wait(EC.textToBePresentInElement(el, text), timeout);
    },
    waitForElementValue: function (el, value, timeout) {
        return browser.wait(EC.textToBePresentInElementValue(el, value), timeout);
    },
    waitForElementVisible: function (el, timeout) {
        return browser.wait(EC.visibilityOf(el),timeout);
    },
    waitForElementClickable: function (el, timeout) {
        return browser.wait(EC.elementToBeClickable(el),timeout);
    },
    waitForElementSelected: function (el, timeout) {
        return browser.wait(EC.elementToBeSelected(el),timeout);
    }
};