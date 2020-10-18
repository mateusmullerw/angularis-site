import React, { useState, useEffect, useRef } from "react";
import "./DotsAnimation.scss";
import getSize from "../../utils/getSize";
import Animation from "./animation";
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
      Animation(document.getElementById("dots") as HTMLCanvasElement, height);
    }
  }, [canvasRef, height, showCanvas]);

  const calcHeight = () => {
    setShowCanvas(getSize("products").width > 850);
    const negativeMargin = -184;
    setHeight(
      getSize("products").height +
        getSize("about").height +
        getSize("clients").height +
        negativeMargin
    );
  };

  return (
    <div className="dots-animation" style={{ height: `${height}px` }}>
      {!isMobile() ? (
        <canvas
          ref={canvasRef}
          id="dots"
          width={`100%`}
          height={`100%`}
        ></canvas>
      ) : (
        ""
      )}
    </div>
  );
};

export default DotsAnimation;
