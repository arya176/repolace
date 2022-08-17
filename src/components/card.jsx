import React from "react";
import Detail from "./detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="heading name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="profilepic"/>
      </div>
      <div className="bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}
export default Card;
