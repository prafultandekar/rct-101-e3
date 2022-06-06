

import React from "react";
import { Products } from "../components/Products";

const Home = () => {
  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "auto",
        padding: "6px",
        // border:"1 px solid yellow"
        
      }}
    >
      <Products />
    </div>
  );
};

export default Home;
