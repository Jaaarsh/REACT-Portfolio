import React from "react";
import projects from "../projects/Projects";

function Portfolio() {
return (
    <section id="projects">
      <div className="intro">
        <div className="center-text">
          <h2> Here are Applications That I Have Developed </h2>
        </div>
        <ul>
          {projects.map((project) => (
            <li a href={project.link} key={project.image}>
              <div>
                <div className="card">
                <a href={project.link}><h3>{project.title}</h3></a>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                  <img src={require(`../projects/assets/${project.title}.png`)} alt={(project.title)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
  export default Portfolio;