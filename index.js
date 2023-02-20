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
const port = 4000;

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

// /** get Params 로 활용한 방법 */
// app.get("/dog/:id", (req, res) => {
//   // localhost:3000/dog/4
//   const q = req.params;

//   res.json({ userId: q.id });
// });

/** query문으로 작성하는 방법 */
app.get("/dog/:id", (req, res) => {
  //http://localhost:3000/dog/4?q=jay&answer=mew
  console.log(req.id);
});

// 참고 사항 > URL 에 한글을 넣으려면 Decode , Encode 을 해야함
app.get("/cat", (req, res) => {
  res.send({ sound: "mew" });
});

// 예제!
app.get("/sound/:name", (req, res) => {
  const { name } = req.params; // const animalsSound = req.params

  if (name === "dog") res.json({ sound: "mung" });
  if (name === "cat") res.json({ sound: "yaOng" });
  if (name === "pig") res.json({ sound: "ggulggul" });

  res.send({ sound: "mew" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// app.listen(3000);
