const fs = require("fs");
console.log("hi");
const getVideos = () => {
  const videoData = fs.readFileSync("./model/videos.json");
  const mappedVidData = JSON.parse(videoData).map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });

  return mappedVidData;
};

module.exports = getVideos;
