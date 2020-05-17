import React from "react";
import { uuid } from "uuidv4";

import vid0Img from "../assets/Images/video-list-0.jpg";

const videoData = [
  {
    id: "0",
    title: "title 0",
    description: "description 0",
    channel: "channel 0",
    image: vid0Img,
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "1",
    title: "title 1",
    description: "description 1",
    channel: "channel 1",
    image: require("../assets/Images/video-list-1.jpg"),
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "2",
    title: "title 2",
    description: "description 2",
    channel: "channel 2",
    image: require("../assets/Images/video-list-2.jpg"),
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "3",
    title: "title 3",
    description: "description 3",
    channel: "channel 3",
    image: require("../assets/Images/video-list-3.jpg"),
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "4",
    title: "title 4",
    description: "description 4",
    channel: "channel 4",
    image: require("../assets/Images/video-list-4.jpg"),
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "5",
    title: "title 5",
    description: "description 5",
    channel: "channel 5",
    image: require("../assets/Images/video-list-5.jpg"),
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "6",
    title: "title 6",
    description: "description 6",
    channel: "channel 6",
    image: "../assets/Images/video-list-6.jpg",
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "7",
    title: "title 7",
    description: "description 7",
    channel: "channel 7",
    image: "../assets/Images/video-list-7.jpg",
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
  {
    id: "8",
    title: "title 8",
    description: "description 8",
    channel: "channel 8",
    image: "../assets/Images/video-list-8.jpg",
    views: "0",
    likes: "0",
    duration: "1",
    video: "mp4",
    timestamp: "1589576704",
    comments: "type of <array>",
  },
];

function VideoList(props) {
  // const videoList = props.videos.map((video) => {
  //   return <li key={uuid()}>{video}</li>;
  // });
  const videoList = props.videos.map((video) => {
    return (
      <li>
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
      </li>
    );
  });

  return <ul className="video-list">{videoList}</ul>;
}

// //by default set the current video to the first object
// let mainVideoIndex = 0;
// let mainVideo = videoData[mainVideoIndex];
// //let the list equal all of the videos
// let videoList = videoData;
// //remove the main video from the video list
// videoList.splice(mainVideoIndex, 1);

export default VideoList;
