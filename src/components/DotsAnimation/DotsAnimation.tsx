import React, { useState, useEffect, useRef } from "react";
import "./DotsAnimation.scss";
import getSize from "../../utils/getSize";
import goMovie from "./animation.js";
import isMobile from "../../utils/useIsMobile";

const DotsAnimation = () => {
  const [height, setHeight] = useState(0);
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => {
      window.removeEventListener("resize", calcHeight);
    };
  });

  useEffect(() => {
    if (showCanvas) {
      goMovie(document.getElementById("dots"), height);
    }
  }, [canvasRef, height, showCanvas]);

  function calcHeight() {
    setShowCanvas(getSize("products").width > 850);
    const negativeMargin = -184;
    setHeight(
      getSize("products").height +
        getSize("about").height +
        getSize("clients").height +
        negativeMargin
    );
  }

  return (
    <div className="dots-animation" style={{ height: `${height}px` }}>
      {!isMobile() ? (
        <canvas
          ref={canvasRef}
          id="dots"
          width="100%"
          height={`${height}px`}
        ></canvas>
      ) : (
        ""
      )}
    </div>
  );
};

export default DotsAnimation;
