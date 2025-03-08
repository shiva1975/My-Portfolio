import React from 'react';
import webDesign from '../assets/web-design.png';
import Coding from '../assets/coding.png';
import './Services.css';

const Services = () => {
  return (
    

      <div className="main">

        <div className='main2'>
          
        <div className="service-box">
          <img src={webDesign} alt="Web Design" />
          <h2>Website Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates?</p>
        </div>

        <div className="service-box">
          <img src={Coding} alt="Website Developing" />
          <h2>Website Development</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates?</p>
        </div>

        <div className="service-box">
          <img src={Coding} alt="Video Editing" />
          <h2>Video Editing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates?</p>
        </div>

        <div className="service-box">
          <img src={Coding} alt="Digital Marketing" />
          <h2>Digital Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates?</p>
        </div>

        <div className="service-box">
          <img src={Coding} alt="PowerBI Reports" />
          <h2>PowerBI Reports</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates?</p>
        </div>

        <div className="service-box">
          <img src={Coding} alt="Design Prototyping" />
          <h2>Design Prototyping</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, voluptates?</p>
        </div>
      </div>
      </div>
    
  );
};

export default Services;
