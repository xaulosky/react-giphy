import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import PropTypes from "prop-types";

const GifGrid = ({ categoria }) => {


  const {data:images, loading} = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando</p>}
      <div className="row">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
