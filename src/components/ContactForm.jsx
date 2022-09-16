import React from "react";
import "./../index.css";
import { Button } from "reactstrap";

function ContactForm() {
  return (
    <div className='contact-page'>
      <form
        action='https://formsubmit.co/wkwo211@mywhitecliffe.com'
        method='POST'
      >
        <input
          type='hidden'
          name='_next'
          value='https://https://kenix-studio.netlify.app/'
        ></input>
        <input type='hidden' name='_captcha' value='false'></input>
        <label for='fullname'>Full Name: </label>
        <p>
          <input
            type='text'
            id='fullname'
            name='fullname'
            placeholder='Full name'
            required
          ></input>
        </p>
        <label for='email'>Email: </label>
        <p>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
          ></input>
        </p>
        <label for='message'>Message: </label>
        <p>
          <textarea
            id='message'
            name='message'
            rows='10'
            placeholder='Enter your message here...'
          ></textarea>
        </p>
        <Button type='submit' value='Submit' color='info'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
