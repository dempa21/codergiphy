import React from "react";


import { Link } from "react-router-dom";

function GifImg({ id, title, url }) {


  return (
      <div className="item-card">
        <div className="item-card_header">
          <h2>{title}</h2>
        </div>
        <div className="item-card_img">
          <img src={url} alt={title}></img>
        </div>
      </div>
  );
}

export default GifImg;