const HTTP_PORT = process.env.PORT || 3000;

const express = requires("express");

const app = express();

app.get("./", (req, res) => {
  res.send(`Jairo Calderon WEB322 ${new Date().toISOString()}`);
});

const server = app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});
