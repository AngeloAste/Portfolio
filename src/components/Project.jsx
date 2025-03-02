import React from "react";

import codeHelp from "../photos/Mi_USS.png";
 
import jobtrace from "../photos/Santander.png";
 
const Project = () => {
  return (
    <div className="projects_p">
      <div className="p_content">
        <div class="projectContainer ">
          <h1 style={{ textAlign: "center", color: "white" }}>
            My Recent <span style={{ color: "violet" }}>Works</span>
          </h1>
          <p style={{ textAlign: "center", color: "white" }}>
            Here are few projects I've worked on recently.
          </p>
          <div className="majorProjects">

 
            <div className="projects">
              <div className="imgProjects">
                <img src={codeHelp} />
              </div>
              <h3>Mi USS</h3>
              <p>
              Developed an application where students can view their schedules, classroom locations, grades, news, job opportunities, and more..
              </p>
              <div className="techStack">
                <button>React Native</button>
                <button>React Js</button>
                <button>Node.js</button>
                <button>Oracle</button>
                <button>MongoDB</button>
              </div>
              <div className="btnProjects">
                <button className="btnP">
                  <a href="https://mi.uss.cl/auth/signin">
                    <i class="bi"></i> Link
                  </a>
                </button>
              </div>
            </div>
 
            <div className="projects">
              <div className="imgProjects">
                <img src={jobtrace} />
              </div>
              <h3>Judicial Forcing Application</h3>
              <p>
              The Judicial Forcing Application is a platform developed for Banco Santander Chile, designed to streamline the process of sending clients to Judicial Collection, allowing for efficient client assignment by automating and simplifying the approval and tracking process for overdue clients.
              </p>
              <div className="techStack">
                <button>Nextjs</button>
                <button>MongoDB</button>
                <button>TailwindCss</button>
              </div>
              <div className="btnProjects">
                <button className="btnP">
                  <a href="https://github.com/">
                    <i class="bi bi-github"></i> GitHub
                  </a>
                </button>
              </div>
            </div>
 
          </div>
          <div>
 
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
