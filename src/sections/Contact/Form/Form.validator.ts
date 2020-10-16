import * as Yup from "yup";

const contactForm = {
  name: Yup.string().required("Este campo é obrigatório"),
  email: Yup.string()
    .required("Este campo é obrigatório")
    .email("Email inválido"),
  interest: Yup.number()
    .min(1, "Escolha uma opção.")
    .required("Este campo é obrigatório"),
};

export const contactFormValidator = Yup.object().shape(contactForm);
