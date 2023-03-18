import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";

function MainPage({ features }) {
  return (
    <>
      <About />
      <Advantages features={features} />
    </>
  );
}

export default MainPage;
