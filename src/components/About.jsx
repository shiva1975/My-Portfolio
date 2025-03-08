import React from "react";
import "./About.css";
import profile from "../assets/myimage.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <h1 className="about-heading">
          Web Developer & <span className="about-heading2">Website Designer</span>
        </h1>
        <p className="about-description">
          Hello! I’m Magret, a passionate website designer dedicated to crafting
          beautiful and functional websites that help businesses thrive online.
          With a keen eye for detail and a love for design, I transform ideas
          into engaging digital experiences.
        </p>
        <a  className="about-button" 
  href="mailto:shivadheeraj90@gmail.com?subject=Project Inquiry&body=Hi Shiva Dheeraj,%0D%0A%0D%0AI'd like to discuss a project with you.">
  Let's Talk <span>&rarr;</span></a>
      </div>
      <div className="about-image-container">
        <img src={profile} alt="Magret" className="about-image" />
      </div>
    </section>
  );
};

export default About;
