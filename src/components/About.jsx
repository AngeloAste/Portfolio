import React from "react";
import bootstrap from "../icons/bootstrap.png";
import css from "../icons/css.png";
import html from "../icons/html.png";
import react from "../icons/react.png";
import js from "../icons/js.png";
import ex from "../icons/ex.png";
import java from "../icons/java.png";
import oracle from "../icons/oracleDB.png";
import net from "../icons/dot_net.png";
import netCore from "../icons/netCore.png";
import node from "../icons/node.png";
import db from "../icons/db.png";
import sql from "../icons/sql.png";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer">
        <h1 className="change">A little about me ,</h1>
        <p className="hello">Hello!</p>
        <p className="a_para">My name is Angelo Aste, a Full Stack Engineer with 10+ years of experience in building web applications. Whenever possible, I love learning new technologies and developing new projects. I primarily develop web applications using the MERN stack, although I also enjoy exploring and working with other technologies and frameworks that catch my interest. Currently, I’m diving into Mobile App Development as well. I'm deeply passionate about technology and take great pride in contributing to the tech world.</p>
        </div>
        <div className="skills">
            <h1 className="change">Skills</h1>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={html}/>HTML</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={css}/>CSS</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={js}/>JavaScript</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={react}/>Reactjs</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={node}/>Node</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={ex}/>Express</button>
            <br/>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={net}/>.NET</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={netCore}/>.NET Core</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={java}/>Java</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={db}/>Mongodb</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={sql}/>SQL</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={oracle}/>Oracle</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={bootstrap}/>Bootstrap</button>
        </div>
    </div>
)}

export default About