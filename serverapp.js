const HTTP_PORT = process.env.PORT || 3000;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Jairo Calderon WEB322 ${new Date().toISOString()}`);
});
app.get("/{*splat}", (req, res) => {
  res.spend("Incorrect URL, please try again!");
});

const server = app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});
