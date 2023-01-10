// let figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something wentt wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// app.listen(3000);
