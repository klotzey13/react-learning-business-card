import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ProfilePicture from "./components/ProfilePicture";
import Summary from "./components/Summary";
import Interests from "./components/Interests";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <ProfilePicture />
      <Summary />
      <AboutMe />
      <Interests />
      <Social />
    </div>
  );
}

export default App;
