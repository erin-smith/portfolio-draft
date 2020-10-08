import React from "react";
import "./style.css";

const images = require.context("../../images", true);


function Project(props) {
  let img_src = images("./" + props.image)
  return(
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" >
          <img className="project-card" alt={props.title} src={img_src}/>
        </div>
        <div className="flip-card-back" style={{backgroundColor: props.bgcolor}}>
          <h1>{props.title}</h1>
          <p> {props.description}</p>
          <button><a href={props.link1}>Repo</a></button>
          <button><a href={props.link2}>Site</a></button>
        </div>
      </div>
    </div>
  );
};

export default Project;