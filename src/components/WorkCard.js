import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project"/>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-btns">
        <NavLink to={props.GITHUB} className="btn">Github</NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
