import React from "react";

function Resume() {
  return (
    <section id="resume">
      <div className="intro">
      <p className="card">
        Click Here to Download My <a href="https://docs.google.com/document/d/1uizn1k4UlNgALQJmUNvQvHRqx4wAhqAYM4oFnaAWUH0/edit?usp=sharing" target="_blank">Resume</a>
        </p>
        <div className="card-skills">
        <h3>Front-End Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
        </div>

        <div className="card-skills">
        <h3>Back-End Skills</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;