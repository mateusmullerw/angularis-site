import React from "react";
import "./Container.scss";

const Container = (props: { children: object }) => {
  return (
    <div className="container">
      <div className="container__inner">{props.children}</div>
    </div>
  );
};

export default Container;
