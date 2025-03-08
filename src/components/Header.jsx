  import React from "react";
  import "./Header.css";

  const Header = () => {
    return (
      <div className="main-class">
        <div className="text-container">
          <p className="first">Welcome to my space</p>
          <h1 className="second">
            I'm a Frontend Developer <br /> UI/UX Designer
          </h1>
          <p className="three">
           Let's work together for bright future
          </p>
          <a  className="btn" 
  href="mailto:shivadheeraj90@gmail.com?subject=Project Inquiry&body=Hi Shiva Dheeraj,%0D%0A%0D%0AI'd like to discuss a project with you.">
  Let's Talk <span>&rarr;</span>
</a>
        </div>
      </div>
    );
  };

  export default Header;
