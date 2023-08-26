const http = require("http");
const CC = require("currency-converter-lt");
// problem is we have to convert number into string just like in line 13
http
  .createServer(async (req, res) => {
    let currencyConverter = new CC({
      from: "USD",
      to: "JPY",
      amount: 100,
      isDecimalComma: true,
    });
    let convertedAmount = await currencyConverter.convert();
    let money = convertedAmount.toString();
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(money);
    console.log(money);
    res.end();
  })
  .listen(1234);
