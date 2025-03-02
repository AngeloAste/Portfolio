import React from "react";
import Home from "./Home";

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:'#242424'}}>
      <div class="container">
        <a class="navbar-brand fs-4" href="#">
          <span className="change_name">AngeloAsteDev</span>
        </a>
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <span className="change_name">AngeloAsteDev</span>
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="nav_bar offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul class="navbar-nav justify-content-center  align-items-center fs-5 flex-grow-1 pe-3 ">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page" href="/">
                  <span style={{color:'white'}}>Home</span>
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/about">
                <span style={{color:'white'}}>About</span>
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/projects">
                <span style={{color:'white'}}>Projects</span>
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/contact">
                <span style={{color:'white'}}>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
