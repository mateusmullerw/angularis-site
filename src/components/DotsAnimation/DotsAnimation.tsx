import React, { useState, useEffect } from "react";
import "./DotsAnimation.scss";
import getSize from "../../utils/getSize";

const DotsAnimation = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => {
      window.removeEventListener("resize", calcHeight);
    };
  });

  function calcHeight() {
    const products = document.getElementById("products");

    const negativeMargin =
      products!.getBoundingClientRect().top - window.innerHeight;
    setHeight(
      getSize("products").height +
        getSize("about").height +
        getSize("clients").height +
        negativeMargin
    );
  }

  return (
    <div className="dots-animation" style={{ height: `${height}px` }}></div>
  );
};

export default DotsAnimation;
