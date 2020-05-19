import React from "react";
import VideoLists from "./VideoLists";

class Videos extends React.Component {
  state = {
    videoLists: [
      {
        id: "1",
        title: "Become A Travel Pro In One Easy Lesson",
        description: "description 0",
        channel: "Scotty Cranmer",
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
        title: "Les Houches The Hidden Gem Of The…",
        description: "description 2",
        channel: "Scotty Cranmer",
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
        title: "Travel Health Useful Medical Information…",
        description: "description 3",
        channel: "Scotty Cranmer",
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
        title: "Cheap Airline Tickets Great Ways To Save",
        description: "description 4",
        channel: "Emily Harper",
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
        title: "Take A Romantic Break In A Boutique Hotel",
        description: "description 5",
        channel: "Ethan Owen",
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
        title: "Choose The Perfect Accommodations",
        description: "description 6",
        channel: "Lydia Perez",
        image: require("../assets/Images/video-list-6.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: "mp4",
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "7",
        title: "Cruising Destination Ideas",
        description: "description 7",
        channel: "Timothy Austin",
        image: require("../assets/Images/video-list-7.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: "mp4",
        timestamp: "1589576704",
        comments: "type of <array>",
      },
      {
        id: "8",
        title: "Train Travel On Track For Safety",
        description: "description 8",
        channel: "Scotty Cranmer",
        image: require("../assets/Images/video-list-8.jpg"),
        views: "0",
        likes: "0",
        duration: "1",
        video: "mp4",
        timestamp: "1589576704",
        comments: "type of <array>",
      },
    ],
  };

  render() {
    return (
      <div className="VideoList">
        <h5 className="side__labels labels ">next video</h5>
        <VideoLists videoLists={this.state.videoLists} />
      </div>
    );
  }
}

export default Videos;

// //by default set the current video to the first object
// let mainVideoIndex = 0;
// let mainVideo = videoData[mainVideoIndex];
// //let the list equal all of the videos
// let videoList = videoData;
// //remove the main video from the video list
//videoList.splice(mainVideoIndex, 1);
