let figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something wentt wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
