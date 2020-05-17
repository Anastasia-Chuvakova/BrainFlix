import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Users from "./components/Users";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
//import VideoList from ".components/VideoList";

import "./styles/styles.css";

// const videoData = [
//   {
//     id: "0",
//     title: "title 0",
//     description: "description 0",
//     channel: "channel 0",
//     image: "../assets/Images/Video-list-0.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "1",
//     title: "title 1",
//     description: "description 1",
//     channel: "channel 1",
//     image: "../assets/Images/Video-list-1.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "2",
//     title: "title 2",
//     description: "description 2",
//     channel: "channel 2",
//     image: "../assets/Images/Video-list-2.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "3",
//     title: "title 3",
//     description: "description 3",
//     channel: "channel 3",
//     image: "../assets/Images/Video-list-3.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "4",
//     title: "title 4",
//     description: "description 4",
//     channel: "channel 4",
//     image: "../assets/Images/Video-list-4.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "5",
//     title: "title 5",
//     description: "description 5",
//     channel: "channel 5",
//     image: "../assets/Images/Video-list-5.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "6",
//     title: "title 6",
//     description: "description 6",
//     channel: "channel 6",
//     image: "../assets/Images/Video-list-6.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "7",
//     title: "title 7",
//     description: "description 7",
//     channel: "channel 7",
//     image: "../assets/Images/Video-list-7.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
//   {
//     id: "8",
//     title: "title 8",
//     description: "description 8",
//     channel: "channel 8",
//     image: "../assets/Images/Video-list-8.jpg",
//     views: "0",
//     likes: "0",
//     duration: "1",
//     video: "mp4",
//     timestamp: "1589576704",
//     comments: "type of <array>",
//   },
// ];

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <section className="hero__wrapsper">
          <Users />
        </section>
        <Videos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
