import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Users from "./components/Users";
import Videos from "./components/Videos";

import "./assets/Video/BrainStation Sample Video.mp4";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Users />
        <Videos />
      </main>
    </div>
  );
}

export default App;
