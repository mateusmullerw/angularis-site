import React from 'react';
import './Contact.scss'; 
import ContactForm from './Form/Form.formik';

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <>
            <div ref={ref} className="contact" id="contact">
                <div className="contact__title">
                    <h1>VAMOS CONVERSAR</h1>
                    <p>Mande uma mensagem pra gente, em breve entraremos em contato.</p>
                </div>
                <div className="contact__form">
                    <ContactForm/>
                </div>
            </div>
        </>
    )
});

export default Contact;