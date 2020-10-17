import * as React from "react";
import { Formik } from "formik";
import { contactFormValidator } from "./Form.validator";
import FormView from "./Form.view";
import EmailJS from "emailjs-com";

interface FormValues {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  interest: number;
}
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

const ContactForm = () => {
  const [sent, setSent] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [failedSent, setFailedSent] = React.useState(false);

  const initialValues = {
    name: "",
    email: "",
    companyName: "",
    phone: "",
    interest: 0,
  };

  const handleSubmit = async (formValues: FormValues, { resetForm }: any) => {
    setIsLoading(true);
    setFailedSent(false);
    const emailForm = {
      user_email: formValues.email,
      to_name: formValues.name,
      user_interest: interestOptions[formValues.interest],
      user_phone: formValues.phone,
      user_company: formValues.companyName,
    };

    EmailJS.send(
      "gmail",
      "template_dbaGNs8o",
      emailForm,
      "user_VpvMpZ95rR283Cz7Pchpj"
    )
      .then((result) => {
        setSent(true);
        setIsLoading(false);
        resetForm({});
      })
      .catch((err) => {
        setFailedSent(true);
        setIsLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidator}
      onSubmit={handleSubmit}
    >
      {(propsFormik) => (
        <FormView
          {...propsFormik}
          successSent={sent}
          failedSent={failedSent}
          isLoading={isLoading}
        />
      )}
    </Formik>
  );
};

export default ContactForm;
