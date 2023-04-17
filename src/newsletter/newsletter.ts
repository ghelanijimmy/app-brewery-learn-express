import express from "express";
import dotenv from "dotenv";
import process from "process";
import path from "path";
import https from "https";

dotenv.config();

const router = express.Router();
router.use(express.static("public"));

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "newsletter", "signup.html"));
});
router.post("/", (req, res) => {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = `https://us21.api.mailchimp.com/3.0/lists/488f7bd6d3`;

  const options = {
    method: "POST",
    auth: `anyUser:${process.env.MAILCHIMP}`,
  };

  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      res.sendFile(
        path.join(process.cwd(), "src", "newsletter", "success.html")
      );
    } else {
      res.sendFile(
        path.join(process.cwd(), "src", "newsletter", "failure.html")
      );
    }
  });

  request.write(jsonData);
  request.end();
});

router.post("/failure", (req, res) => {
  res.redirect("/newsletter");
});

export default router;
