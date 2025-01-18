var Environment;
(function (Environment) {
    Environment[Environment["LOCAL"] = 0] = "LOCAL";
    Environment[Environment["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    switch (env) {
        case Environment.LOCAL:
            return "Running on local environment";
        case Environment.DEVELOPMENT:
            return "Running on development";
        case Environment.STAGING:
            return "Running on staging";
        case Environment.PRODUCTION:
            return "Running on production";
    }
}
console.log(runTests(Environment.PRODUCTION));
