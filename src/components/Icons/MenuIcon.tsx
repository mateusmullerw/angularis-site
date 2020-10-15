import React from "react";

interface IMenuProps {
  className?: string;
}
const MenuIcon = (props: IMenuProps) => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      viewBox="0 0 24 24"
      className={className ? className : ""}
    >
      <path
        fill-color="#ffffff"
        className="icon__menu"
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      />
    </svg>
  );
};

export default MenuIcon;
