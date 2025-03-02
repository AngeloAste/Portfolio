import React from "react";
import Words from "./TypingAnimation";
import img from "../assets/about.png";
const Home = () => {
  return (
    <div className="homePage">
      <div className="homeContent">
        <div>
          <h1>
            Hi&#128075;, I am <span className="purple">Angelo Aste</span>
          </h1>
          <p className="typing">
            I am into <Words />
          </p>
          <p className="para">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results.I develop web applications
            mostly using the MERN stack, but I'm also exploring other
            technologies and frameworks that are interesting to me.
            I love to contribute to the world of
            technology.
          </p>
        </div>
        <div>
          <img className="homeImg" src={img} />
        </div>
      </div>
    </div>
  );
};

export default Home;
