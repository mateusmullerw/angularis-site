import React from "react";
import "./ProductCard.scss";

interface IProductCardProps {
  label: string;
  children: object;
}

const ProductCard = (props: IProductCardProps) => {
  const { label, children } = props;
  return (
    <div className="product-card">
      <div className="product-card__icon">{children}</div>
      <p className="subtitle--1 product-card__label">{label}</p>
    </div>
  );
};

export default ProductCard;
