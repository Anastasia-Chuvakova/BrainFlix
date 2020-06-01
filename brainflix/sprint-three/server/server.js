const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");

const getMainVideo = require("./controller/getMainVideo");
const getVideos = require("./controller/getVideos");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.search(express.json());

app.get("/", (req, res) => {
  // res.send("hello from express");
});

app
  .route("/videos")
  .get((req, res) => {
    res.json(getVideos());
  })
  .post((req, res) => {
    let videoData = JSON.parse(fs.readFileSync("./model/videos.json"));

    videoData.push(req.body);

    fs.writeFileSync("./model/videos.json", JSON.stringify(videoData));
    res.redirect("/videos");
  })
  .put((req, res) => {
    res.send("video updated");
  });

// dynamic path using an id as a param
app.get("/videos/:id", (req, res) => {
  const vidId = req.params.id;
  res.json(getMainVideo(vidId));
});

app.listen(5000, console.log("app is listening at: http://localhost:5000"));
