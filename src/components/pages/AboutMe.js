import React from "react";
import profile from '../header/profilePicture.jpg';

function About() {
return (
  <section id="aboutMe">
    <div className="intro">
      <div className="center-text">
      <h1>
        Welcome to my Portfolio, My name is Joshua Ellis.
      </h1>
      <img src= {profile} alt='profile' width={180} />
      <p>
        I am a Front End / Full Stack developer. I graduated from the UNH Full Stack Program where I received a certificate in Full Stack Development
        and gained skills in HTML, CSS,  JavaScript, React as well as SQL and NoSQL databases. I grew up with a love for technology  I am always looking to expand on my passion
        and further my knowledge in this amazing career.
      </p>
      </div>
    </div>
  </section>
);
}

export default About;