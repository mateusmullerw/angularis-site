import React, { useState } from "react";
import "./Form.scss";
import InputMask from "react-input-mask";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import SuccessSentIcon from "../../../components/Icons/SuccessSent";

const FormView = (props: any) => {
  const [interest, setInterest] = useState(0);

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    successSent,
    failedSent,
  } = props;

  const handleSelectChange = (value: number) => {
    setInterest(value);
    setFieldValue("interest", value);
  };

  const interestOptions = [
    { label: "Estou interessado em", value: 0 },
    { label: "Desenvolvimento de plataforma web", value: 1 },
    { label: "Desenvolvimento de site", value: 2 },
    { label: "Desenvolvimento de loja virtual", value: 3 },
    { label: "Desenvolvimento de aplicativo", value: 4 },
    { label: "Serviço de design UX/UI", value: 5 },
    { label: "Serviço de infraestrutura", value: 6 },
    { label: "Serviço de gestão de projetos", value: 7 },
    { label: "Consultoria tecnológica", value: 8 },
  ];

  return (
    <form onSubmit={handleSubmit} className="form">
      {successSent ? (
        <div className="form__confirm">
          <SuccessSentIcon />
          <h3>Mensagem enviada!</h3>
          <p className="body--1">Em breve entraremos em contato.</p>
        </div>
      ) : (
        ""
      )}

      <Input
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Nome*"
        caption={touched.name && errors.name ? errors.name : ""}
        error={touched.name && errors.name ? true : false}
      />

      <Input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="E-mail*"
        caption={touched.email && errors.email ? errors.email : ""}
        error={touched.email && errors.email ? true : false}
      />

      <Input
        name="companyName"
        value={values.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Empresa"
      />

      <InputMask
        mask={"(99) 99999-9999"}
        onChange={handleChange}
        onBlur={handleBlur}
        name="phone"
        value={values.phone}
      >
        {() => (
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            name="phone"
            value={values.phone}
            placeholder="Telefone"
          />
        )}
      </InputMask>
      <Select
        options={interestOptions}
        value={interest}
        name="interest"
        onChange={(e) => handleSelectChange(parseInt(e.target.value))}
        caption={touched.interest && errors.interest ? errors.interest : ""}
        error={touched.interest && errors.interest ? true : false}
      ></Select>
      {failedSent ? (
        <div className="form__error">
          <p>
            Aconteceu um erro, tente novamente mais tarde ou envie um e-mail
            para comercial@angularis.tech
          </p>
        </div>
      ) : (
        ""
      )}
      <Button
        type="submit"
        fullWidth
        label="Enviar"
        isLoading={props.isLoading}
      />
    </form>
  );
};

export default FormView;
