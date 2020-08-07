import * as React from "react";
import { Formik } from "formik";
import {contactFormValidator} from './Form.validator';
import FormView from './Form.view';

interface FormValues {
  name: string; 
  email: string; 
  companyName: string; 
  phone: string; 
  interest: string;
}

const ContactForm = (props: any) => {

  const { handleSend } = props;

  const initialValues = {
    name: '', 
    email: '', 
    companyName: '', 
    phone: '', 
    interest: '',
  }


  const handleSubmit = async (formValues: FormValues) => {
    console.log(formValues)
  };



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidator}
      onSubmit={handleSubmit}
    >
      {(propsFormik) => (
        <FormView {...propsFormik} />
      )}
    </Formik>
  )

}

export default ContactForm;