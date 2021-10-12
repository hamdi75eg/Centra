const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const joi = require("joi");
const credits = require("./email");

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => res.json({ msg: "Hello World" }));

app.use(express.static("centra-client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "centra-client", "build", "index.html"));
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.post("/mail", (req, res) => {
  const data = req.body;

  const schema = joi.object({
    mail: joi.string().email().required(), //change to 2 or 64 later
    text: joi.string().required(), //change to 64 later
    fullname: joi.string().required(),
  });

  const valid = schema.validate(data);

  console.log(valid)

  if (valid.error) {
    return res.json({ error: valid.error.details[0].message});
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "centra.frontend@gmail.com", // generated ethereal user
      pass: "CentraFend21!", // generated ethereal password
    },
  });

  var mailOptions = {
    from: "centra.frontend@gmail.com",
    to: data.mail,
    subject: "Welcome To Nodemailer",
    text: data.text,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ error: error.message });
    } else {
      res.json({ succ: "Email sent: " + info.response });
    }
  });
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`Example app listening on port 4000!`)
);
