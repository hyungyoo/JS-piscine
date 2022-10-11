//https://www.youtube.com/watch?v=18qA61bpfUs

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config.js");
const { oauth2 } = require("googleapis/build/src/apis/oauth2/index.js");
const OAuth2 = google.auth.OAuth2;

const OAuth2_client = new OAuth2(config.clientId, config.clientSecret);
OAuth2_client.setCredentials({ refresh_token: config.refreshToken });
const randomNumber = Math.round(Math.random() * 100);

send_mail = (name, recipient) => {
  // for check! user!
  // token!
  const accessToken = OAuth2_client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: config.user,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken,
      accessToken: accessToken,
    },
  });

  const mail_option = {
    from: config.user,
    to: recipient,
    subject: `test! ${name}`,
    text: `for check! mettre numero dans app : ${randomNumber}`,
  };

  transport.sendMail(mail_option, function (error, result) {
    if (error) {
      console.log("Error :", error);
    } else {
      console.log("Success:", result);
    }
    transport.close();
  });
};

const express = require("express");
const prompt = require("prompt");

const app = express();
const server = app.listen(3000, () => {
  console.log("start server");
});


app.get("/", (req, res) => {
  send_mail("hyungyoo", "hjyoo901112@gmail.com");
  res.send("메일로 간 숫자 입력하세요");
  prompt.start();
  prompt.get(["number"], (error, result) => {
    if (Number(result.number) === Number(randomNumber)) {
      console.log("통과");
    } else {
      console.log("틀림");
    }
  });
});