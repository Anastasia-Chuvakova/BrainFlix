const fs = require("fs");

const getMainVideo = (id) => {
  const videoData = fs.readFileSync("./model/videos.json");
  const filteredMainVideo = JSON.parse(videoData)
    .filter((video) => video.id === id)
    .shift();

  return filteredMainVideo;
};
module.exports = getMainVideo;
