import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Comments from "./components/Comments";

//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <video></video>
        <section className="hero__wrapper">
          <Comments />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
