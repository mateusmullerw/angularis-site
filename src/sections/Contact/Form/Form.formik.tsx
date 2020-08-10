import * as React from "react";
import { Formik } from "formik";
import {contactFormValidator} from './Form.validator';
import FormView from './Form.view';
import EmailJS from 'emailjs-com';


interface FormValues {
  name: string; 
  email: string; 
  companyName: string; 
  phone: string; 
  interest: string;
}

const ContactForm = (props: any) => {


  const [sent, setSent] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const initialValues = {
    name: '', 
    email: '', 
    companyName: '', 
    phone: '', 
    interest: '',
  }


  const handleSubmit = async (formValues: FormValues, {resetForm}: any) => {
    setIsLoading(true);
    const emailForm = {
      user_email: formValues.email,
      to_name: formValues.name, 
      user_interest: formValues.interest,
      user_phone: formValues.phone, 
      user_company: formValues.companyName
    }

    const EmailConfirm = {
      user_nome: formValues.name,
      user_email: formValues.email,
    }

    EmailJS.send('gmail', 'email_confirmation', EmailConfirm, 'user_pM46J0NBSagi2FuYUwhbW')
    .then((result) => {
      console.log(result.text)
    })
    .catch(err => {
      console.log(err);
    });

    EmailJS.send('gmail', 'template_AeEYg9Ay', emailForm,  'user_pM46J0NBSagi2FuYUwhbW')
    .then((result) => {
      console.log(result.text);
      setSent(true);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    });


    resetForm({});

  };

  const closeAlert = () => {
    console.log("aqui")
    setSent(false);
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidator}
      onSubmit={handleSubmit}
    >
      {(propsFormik) => (
        <FormView {...propsFormik} isOk={sent} closeAlert={closeAlert} isLoading={isLoading}/>
      )}
    </Formik>
  )

}

export default ContactForm;