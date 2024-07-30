import "./HeroimgStyles.css";
import React from 'react';
import IntroImg from "../assets/profile3.jpg";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Intro" />
      </div>
      <div className="content">
        <p>Hello, I'M GAYATHRI MUSHAM.</p>
        <h1>
          A 3<sup>rd</sup> year student at Mallareddy University,
          <br />
          Artificial Intelligence & Machine Learning Specialization.
        </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
