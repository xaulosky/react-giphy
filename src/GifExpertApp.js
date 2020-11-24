import React, { useState } from "react";
import GifGrid from './components/GifGrid'
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Gif exppert app</h2>
          <hr />
          <AddCategory setCategories={setCategories} />
          <br />
          <div className="">
            {
            categories.map((categoria) =>  (
            
            <GifGrid 
                key={categoria} 
                categoria={categoria} 
            />
            
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifExpertApp;
