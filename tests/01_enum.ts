enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION

}

function runTests(env: Environment): string {
    switch(env){
        case Environment.LOCAL:
            return "Running on local environment"
        case Environment.DEVELOPMENT:
            return "Running on development"
        case Environment.STAGING:
            return "Running on staging"
        case Environment.PRODUCTION:
            return "Running on production"
    }
}

console.log(runTests(Environment.PRODUCTION))