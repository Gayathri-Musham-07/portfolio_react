import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/introo.jpg";
import resume from "../assets/resume.pdf"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="img-container">
          <img src={React1} className="img" alt="Profile" />
        </div>
      </div>
      <div className="right">
        <div className="education">
          <img
            src="https://res.cloudinary.com/dao5b1upe/image/upload/v1695564245/pro_vbadrs.png"
            alt="Education icon"
            className="icon"
          />
          <div>
            <p>Education</p>
            <p>B-Tech CSE AI & ML</p>
          </div>
        </div>
        <p>I’m an enthusiastic engineer with strong interpersonal skills. I have an avid interest in web development and designing. I am a fast learner. My primary skill set includes Engineering, HTML, CSS, JavaScript, Python, SQL,React,Angular,Java. Seeking challenging roles in the field of software development where I can put to use the skills I gained so far and learn more in the process and learn from experienced professionals to enhance my skill set and deliver high-quality work. I am Currently studying Btech in Artificial Intelligence & Machine Learning Specialization in Malla Reddy University.</p>
        <div className="button-container">
          <Link to="/contact">
            <button className="btn">Contact Info</button>
          </Link>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
