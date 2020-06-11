const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => res.json({ msg: "Hello World" }));

app.use(express.static("centra-client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "centra-client", "build", "index.html"));
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`Example app listening on port 4000!`)
);
