import React from "react";
import "./Products.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import AppIcon from "../../components/Icons/AppIcon";
import WebsiteIcon from "../../components/Icons/WebsiteIcon";
import EcommerceIcon from "../../components/Icons/EcommerceIcon";
import WebPlatformIcon from "../../components/Icons/WebPlatformIcon";

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products__grid">
        <ProductCard label="Aplicativos">
          <AppIcon />
        </ProductCard>
        <ProductCard label="Websites">
          <WebsiteIcon />
        </ProductCard>
        <ProductCard label="E-commerce">
          <EcommerceIcon />
        </ProductCard>
        <ProductCard label="Plataforma web">
          <WebPlatformIcon />
        </ProductCard>
      </div>
    </div>
  );
};

export default Products;
