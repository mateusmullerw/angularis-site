import React from "react";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import "./Button.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  secondary?: boolean;
}

const Button = (props: IButtonProps) => {
  const { label, isLoading, fullWidth, large, secondary, ...rest } = props;

  return (
    <button
      className={`button ${isLoading ? "button--loading" : ""} 
      ${fullWidth ? "button--full-width" : ""} 
      ${large ? "button--large" : ""}
      ${
        secondary
          ? isLoading
            ? "button--secondary--loading"
            : "button--secondary"
          : ""
      }
      `}
      {...rest}
    >
      {label}
      {isLoading ? <LoadingCircle /> : ""}
    </button>
  );
};

export default Button;
