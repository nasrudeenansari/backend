const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 3001; //You can change this

var cors = require("cors");
app.use(cors());

app.get("/api/data", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
