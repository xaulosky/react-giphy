import React from "react";


const GifGridItem = ({ title, url, id }) => {
  return (
    <div className="col-md-3 animate__fadeIn">
      <div className="card text-left ">
        <img src={url} alt={title} className="card-img-top" />
        <div className="card-body">
          <div className="card-title">{title}</div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default GifGridItem;
