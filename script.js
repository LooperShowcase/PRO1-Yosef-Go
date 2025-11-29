const express = require("express");
const app = express();

const data = require("./data.json");

app.use(express.static("public"));

app.get("/api/data", (req, res) => {
  const arrayLength = data.people.length;
  const randomIndex = Math.floor(Math.random() * arrayLength); // CALCULATE HERE!
  res.json(data.people[randomIndex]);
});
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
