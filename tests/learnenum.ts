enum testStatus{
    Pass,
    Fail=2,
    TimeOut
}
console.log(testStatus.TimeOut)


enum CountryCode{
    Alaska=3,
    Barcilona,
    India=1,
    USA=1
}

console.log(CountryCode.USA)

//string Enum
enum browserType{
  browser1="",
  browser2="edge",
  browser3="Safari"
}

console.log(browserType.browser3)
console.log(browserType.browser1)