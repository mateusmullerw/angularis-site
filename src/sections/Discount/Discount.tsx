import React from "react";
import "./Discount.scss";
import discount from "assets/discount.jpg";
import Button from "../../components/Button/Button";
import scrollTo from "../../utils/scrollTo";

const Discount = () => {
  return (
    <div className="discount" id="discount">
      <img src={discount} alt="" className="discount__img" />
      <div className="discount__content">
        <h2 className="discount__title">Programa de apoio</h2>
        <p className="discount__percent">10%</p>
        <h3 className=" discount__subtitle">de desconto para</h3>
        <h3 className=" discount__subtitle--bottom">
          mulheres empreendedoras e pequenas empresas
        </h3>
        <Button
          onClick={() => scrollTo("contact")}
          label="Entre em contato"
          large
          secondary
        />
      </div>
    </div>
  );
};

export default Discount;
