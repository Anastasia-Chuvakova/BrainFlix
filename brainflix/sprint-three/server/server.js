const express = require("express");

const getMainVideo = require("./controller/getMainVideo");
const getVideos = require("./controller/getVideos");
//const getComments = require("./controller/getComments");

const app = express();

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
    console.log(req.body);
    // videoData.push(req.body);
    res.json("videoData");
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
