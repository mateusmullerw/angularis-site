import React from "react";
import "./icon.scss";

const AppIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      width="100%"
      viewBox="0 0 80 80"
      className="icon icon--product"
    >
      <rect x="18" y="1" width="43" height="78" rx="5" />
      <path d="M30 1H50V3C50 4.10457 49.1046 5 48 5H32C30.8954 5 30 4.10457 30 3V1Z" />
      <rect x="24" y="17" width="13" height="13" rx="2" />
      <rect x="24" y="35" width="13" height="13" rx="2" />
      <rect x="24" y="53" width="13" height="13" rx="2" />
      <rect x="42" y="17" width="13" height="13" rx="2" />
      <rect x="42" y="35" width="13" height="13" rx="2" />
      <rect x="42" y="53" width="13" height="13" rx="2" />
      <path d="M29 74.5H51" />
    </svg>
  );
};

export default AppIcon;
