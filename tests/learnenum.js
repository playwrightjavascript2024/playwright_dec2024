var testStatus;
(function (testStatus) {
    testStatus[testStatus["Pass"] = 0] = "Pass";
    testStatus[testStatus["Fail"] = 2] = "Fail";
    testStatus[testStatus["TimeOut"] = 3] = "TimeOut";
})(testStatus || (testStatus = {}));
console.log(testStatus.TimeOut);
var CountryCode;
(function (CountryCode) {
    CountryCode[CountryCode["Alaska"] = 3] = "Alaska";
    CountryCode[CountryCode["Barcilona"] = 4] = "Barcilona";
    CountryCode[CountryCode["India"] = 1] = "India";
    CountryCode[CountryCode["USA"] = 1] = "USA";
})(CountryCode || (CountryCode = {}));
console.log(CountryCode.USA);
//string Enum
var browserType;
(function (browserType) {
    browserType["browser1"] = "";
    browserType["browser2"] = "edge";
    browserType["browser3"] = "Safari";
})(browserType || (browserType = {}));
console.log(browserType.browser3);
console.log(browserType.browser1);
