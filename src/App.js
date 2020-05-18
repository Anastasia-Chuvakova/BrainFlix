import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Users from "./components/Users";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import MainVideo from "./components/MainVideo";
//import CommentsForm from "./components/CommentsForm";
//import VideoList from ".components/VideoList";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <section className="comments__wrapper">
          <Users />
        </section>
        <MainVideo />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
