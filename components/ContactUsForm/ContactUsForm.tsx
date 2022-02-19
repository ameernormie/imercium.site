import React from "react";
import { Formik, Form } from "formik";

import { formSchema } from "./FormValidationSchema";
import { InputFeild } from "./InputFeild";
import { TextArea } from "./TextArea";
import { ContactUsFormStyle } from "./ContactUsForm.style";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

const ContactUsForm = () => {
  const handleFormSubmit = (values: ContactFormType) => {
    console.log(values);
  };

  return (
    <ContactUsFormStyle>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validateOnChange={false}
        validationSchema={formSchema}
        onSubmit={handleFormSubmit}
      >
        {({}) => (
          <Form className="form-wrapper">
            <InputFeild name="name" placeholder="Name*" />
            <InputFeild name="email" placeholder="Email*" />
            <TextArea
              rows={7}
              name="message"
              placeholder="Send Us a Message*"
            />
            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </ContactUsFormStyle>
  );
};
export default ContactUsForm;
