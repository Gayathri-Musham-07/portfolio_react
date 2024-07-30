import './FormStyles.css';
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init('eTqD7BnFkTqs0K81R');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_weyrgzg', 'template_lrpbyx6', form.current)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Email successfully sent!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" required />
      <label>Email</label>
      <input type="email" name="from_name" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
