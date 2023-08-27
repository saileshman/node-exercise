const pdf = require("pdfkit");
const fs = require("fs");

const doc = new pdf();
doc.pipe(fs.createWriteStream("output.pdf"));
// create pdf
doc.fontSize(25).text("hello, i am pdf text do something.", 100, 100);
// create image
/* search solution
doc.image("pdf/to/image.png", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});
*/
doc.end();
