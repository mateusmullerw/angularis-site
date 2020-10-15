import React from "react";
import "./IconButton.scss";

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = (props: IIconButtonProps) => {
  const { ...rest } = props;

  return (
    <button className="icon-button" {...rest}>
      {props.children}
    </button>
  );
};

export default IconButton;
