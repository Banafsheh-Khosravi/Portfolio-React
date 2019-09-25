import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home title="I'm Bani." button="Resume" />
        <About title="About Me." />

        <Contact title="Contact." button="Send me an email" />
      </div>
    );
  }
}
export default App;
