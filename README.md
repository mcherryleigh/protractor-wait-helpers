# protractor-wait-helpers
Wait helper functions for Protractor tests using expected conditions.

These functions are an extremely small wrapper around Protractor ExpectedConditions.

##Arguments
* "el" is an protractor element()
* "text/value" are strings that the element will wait to have
* "timeout" is an integer length to wait in ms

##Function
* waitForElementText: function (el, text, timeout)
* waitForElementValue: function (el, value, timeout)
* waitForElementVisible: function (el, timeout)
* waitForElementClickable: function (el, timeout)
* waitForElementSelected: function (el, timeout)

##TODO: Code Example
##TODO: Package.json file