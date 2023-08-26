const http = require("http");
const Qrcode = require("qrcode");

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = "hello, website";
    const qrdata = await Qrcode.toDataURL(data);
    const qrimg = `<img src="` + qrdata + `" />`;
    res.write(qrimg);
    res.end();
  })
  .listen(1111);
console.log("app is running on 1111");
