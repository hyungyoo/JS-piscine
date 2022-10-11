const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3000, () => {
  console.log("start server");
});

// api 키 발행!
const key = uuidAPIKey.create();

app.get("/api/user/:apiKey/:type", async (req, res) => {
  // url에서 param 가져오는법! 중요!
  const { apiKey, type } = req.params;

  try {
    // error
    uuidAPIKey.isAPIKey(apiKey) && uuidAPIKey.check(apiKey, key.uuid);
  } catch (e) {
    console.log(e);
    res.send("error page!!! pas de apikey");
    return;
  }

  let dummyData;
  if (type === "ecole42") {
    dummyData = {
      name: "hyungyoo",
      ecole: "42",
    };
  } else if (type === "epitech") {
    dummyData = {
      name: "yoo",
      ecole: "epitech",
    };
  } else {
    dummyData = {
      name: "no",
      ecole: "no",
    };
  }
  res.send(dummyData);
});
