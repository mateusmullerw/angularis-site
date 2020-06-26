import * as React from "react";
import { Formik } from "formik";
import {contactFormValidator} from './Form.validator';
import FormView from './Form.view';

const ContactForm = (props: any) => {

  const { onSubmit } = props;
  const initial = {

  }


  return (
    <Formik
      initialValues={initial}
      validationSchema={contactFormValidator}
      onSubmit={onSubmit}
    >
      {(propsFormik) => (
        <FormView {...propsFormik} />
      )}
    </Formik>
  )

}

export default ContactForm;