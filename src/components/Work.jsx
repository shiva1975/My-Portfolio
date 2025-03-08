import React from "react";
import "./Work.css";

const Work = ({ index, title, description, image, link }) => {
  const isEven = index % 2 === 0; // Alternates layout for even/odd indexes

  return (
    <section className={`work-container ${isEven ? "reverse" : ""}`}>
      <div className="work-text">
        <h2 className="work-title">Work</h2>
        <h1 className="work-heading">{title}</h1>
        <p className="work-description">{description}</p>
        <a href={link} className="work-button" target="_blank" rel="noopener noreferrer">
          Learn more <span>&rarr;</span>
        </a>
      </div>
      <div className="work-image-container">
        <h1 className="work-index">{index < 10 ? `0${index}` : index}</h1>
        <img src={image} alt={title} className="work-image" />
      </div>
    </section>
  );
};

export default Work;
