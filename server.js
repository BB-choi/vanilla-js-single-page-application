const express = require("express");
const path = require("path");

const app = express();
const port = 3100;

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server running on port ${port}`)
);
