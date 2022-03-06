import React from "react";

import {validateEmail} from '../../utils/helpers';
import { useState } from "react";

function Contact() {
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    const handleChange = (e) => {
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your Email is Invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
        else {
            setErrorMessage(" You are Missing a Required Field");
        }
    };

    return (
        <div className="intro">
            <div className="container">
            <h1>Contact Me</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="name">
                    <label for="nameame">Name</label>
                    <input type="text" name="Name" defaultValue={name}  onBlur={handleChange} tabIndex="1"/>
                </div>
                    <br />
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" defaultValue={email}  onBlur={handleChange} tabIndex="3"/>
                </div>
                    <br />
                <div>
                    <label for="message">Message</label>
                    
                    <input name="Message" defaultValue={message}  onBlur={handleChange} tabIndex="3"/>
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Contact;