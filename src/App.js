import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Comments from "./components/Comments";
import Footer from "./Footer";

import "./styles/styles.css";

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
      <Footer />
    </div>
  );
}

export default App;
