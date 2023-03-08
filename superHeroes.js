const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  // 응답에 hello World 를 보내겠다
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
