const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");

const getMainVideo = require("./controller/getMainVideo");
const getVideos = require("./controller/getVideos");
//const getComments = require("./controller/getComments");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.search(express.json());

app.get("/", (req, res) => {
  res.send("hello from express");
});

app
  .route("/videos")
  .get((req, res) => {
    res.json(getVideos());
  })
  .post((req, res) => {
    console.log("req = ", req.body);
    console.log("res =", res);

    //read video.json as var
    // let videoData = JSON.parse(fs.readFileSync("./model/videos.json"));
    let videoData = JSON.parse(fs.readFileSync("./model/videos.json"));
    // videoData = JSON.parse(videoData);
    console.log(videoData);
    //push requ.body into json var
    videoData.push(req.body);
    //push new json var to file
    fs.writeFileSync("./model/videos.json", JSON.stringify(videoData));
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
