const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const joi = require("joi");
const moment = require("moment");

app.use(express.static("centra-client/src/media"));

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => res.json({ msg: "Hello World" }));

app.use(express.static("centra-client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "centra-client", "build", "index.html"));
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

autoreply = (recpient) => {
  let transporter_centra = nodemailer.createTransport({
    name: "centra-egypt.com",
    host: "centra-egypt.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "autoreplay@centra-egypt.com",
      pass: "NodeSender2021!MS!",
    },
  });
  var mailOptions_centra = {
    from: "autoreplay@centra-egypt.com",
    to: recpient,
    subject: `Welcome to centra`,
    text: `Its alive!`,
  };

  console.log(mailOptions_centra);

  transporter_centra.sendMail(mailOptions_centra, function (error, info) {
    if (error) {
      res.json({ error: error.message });
    } else {
      res.json({ succ: "Email sent: " + info.response });
    }
  });
};

app.post("/mail", (req, res) => {
  const data = req.body;

  const schema = joi.object({
    mail: joi.string().email().required(), //change to 2 or 64 later
    text: joi.string().required(), //change to 64 later
    fullname: joi.string().required(),
  });

  const valid = schema.validate(data);

  console.log(valid);

  if (valid.error) {
    return res.json({ error: valid.error.details[0].message });
  }

  const email_html = `<!DOCTYPE html>
  <html>
  
  <body>

      <div style="background-color:#1a237e;">
  
          <p style="text-align:center"><img
                  src="cid:unique@centra.ee" width=500 height=100
                  alt="Centa Logo"><img></p>
      </div>
  
  
      <div style="color: #212121">
          <p style="font-family:Verdana, Geneva, Tahoma, sans-serif;">Dear Mr/Ms ${data.fullname},</p>
  
          <p style="font-family:Verdana, Geneva, Tahoma, sans-serif;margin-top:10px">Your inquiry being processed, we will
              be in contact soon!</p>
          <p style="font-family:Verdana, Geneva, Tahoma, sans-serif;margin-top:10px">In the meantime you can check out our <a href="https://drive.google.com/uc?export=view&id=15TUOZ8fjyTEGSEhmalWyoAkkOhsn2Dip">catalouge</a></p>    
          <br />
          <p style="font-family:Verdana, Geneva, Tahoma, sans-serif; margin:0px">Thanks in advance,</p>
          <p style="font-family:Verdana, Geneva, Tahoma, sans-serif;margin-top:3px">Centra team</p>
      </div>
  
      <br />
  </body>
  
  <footer>
      <div >
          <div >
              <h5  style="text-align:left; color: #1a237e ;">
                  Contact Us:
              </h5>
              <p style="color: #212121;">
              <p style="text-align:left;">
                  Phone: +20 (111) 2911174
              </p>
  
              <p style="text-align:left;">
                  Landline: +20 (2) 38330869 / +20 (2) 38330856
              </p>
              <p style="text-align:left;">
                  Fax: +20 (2) 38330557
              </p>
              <p style="text-align:left;">
                  Email: info@centra-egypt.com
              </p>
              </p>
          </div>
          <div >
              <h5 style="text-align:left;color:#1a237e ">
                  Office Address:
              </h5>
              <p>Centra, 206 Ext. of sixth industrial area, 6th Of October City, Giza, Egypt</p>
          </div>
  
      </div>
  
      </div>
      </div>
  </footer>
  
  </html>`;
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
    to: "centra.frontend@gmail.com",
    subject: `Message From ${data.mail}`,
    text: `Inquiry from ${data.fullname}, which mentions: ${
      data.text
    }, this message was created on ${moment().format(
      "MMMM Do YYYY, h:mm:ss a"
    )}`,
  };

  //console.log(mailOptions);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({ error: error.message });
    } else {
      res.json({ succ: "Email sent: " + info.response });
      let transporter_centra = nodemailer.createTransport({
        name: "centra-egypt.com",
        host: "centra-egypt.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "autoreplay@centra-egypt.com",
          pass: "NodeSender2021!MS!",
        },
      });
      var mailOptions_centra = {
        from: "autoreplay@centra-egypt.com",
        to: data.mail,
        subject: `Thanks For Reaching Out!`,
        html: email_html,
        attachments: [
          {
            filename: "new_logo.png",
            path: `${"./centra-client/src/media/new_logo.png"}`,
            cid: "unique@centra.ee", //same cid value as in the html img src
          },
        ],
      };

      console.log(mailOptions_centra);

      transporter_centra.sendMail(mailOptions_centra, function (error, info) {
        if (error) {
          console.log("Error" + error.message);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  });
});

app.post("/mail-centra", (req, res) => {
  const data = req.body;

  const schema = joi.object({
    mail: joi.string().email().required(), //change to 2 or 64 later
    text: joi.string().required(), //change to 64 later
    fullname: joi.string().required(),
  });

  const valid = schema.validate(data);

  console.log(valid);

  if (valid.error) {
    return res.json({ error: valid.error.details[0].message });
  }
  let transporter_centra = nodemailer.createTransport({
    name: "centra-egypt.com",
    host: "centra-egypt.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "autoreplay@centra-egypt.com",
      pass: "NodeSender2021!MS!",
    },
  });
  var mailOptions_centra = {
    from: "autoreplay@centra-egypt.com",
    to: data.mail,
    subject: `Welcome to centra`,
    text: `Its alive!`,
  };

  console.log(mailOptions_centra);

  transporter_centra.sendMail(mailOptions_centra, function (error, info) {
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
