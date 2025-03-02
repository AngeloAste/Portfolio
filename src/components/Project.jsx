import React from "react";

import codeHelp from "../photos/Mi_USS.png";
import winwin from "../photos/winwin.png";
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
                <button>React Js</button>
                <button>SQL Server</button>
                <button>.NET</button>
              </div>
              <div className="btnProjects">
 
              </div>
            </div>


            <div className="projects">
              <div className="imgProjects">
                <img src={winwin} />
              </div>
              <h3>WinWin Application</h3>
              <p>
              Win Win is a platform developed for Banco Santander Chile, designed to track and evaluate the performance of recovery executives by measuring key indicators such as client management, recovered amounts, and accumulated points. It provides a structured view of different credit categories, including consumer loans, mortgages, and renegotiations, allowing for real-time performance assessment and incentive calculation.
              </p>
              <div className="techStack">
                <button>React js</button>
                <button>SQL Server</button>
                <button>.NET</button>
              </div>
              <div className="btnProjects">
 
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
