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

// terminal > node index.js > 크롬에서 localhost:3000

// req (요청) , res (응답)
app.get("/", (req, res) => {
  // 응답에 hello World 를 보내겠다
  res.send("hello World");
});

app.get("/dog", (req, res) => {
  // JSON ( JavaScript Object Notation ) => JSON 형태로 보내줘야함
  res.json({ sound: "멍멍" }); // res.send({ sound: "멍멍" }) === res.json({ sound: "멍멍" });
  // res.send("dog");
});

app.get("/cat", (req, res) => {
  res.send({ sound: "mew" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// app.listen(3000);
