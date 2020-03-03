import React, {Component} from 'react';
import {
  ContactUsForm,
  SubmitButton
} from './ContactUs.styles';

class ContactUs extends Component {
  render() {
    return (
      <ContactUsForm>
        <label for="firstName">* First Name:</label>
				<input type="text" name="firstName" id="firstName" required="required" />
				<label for="lastName">* Last Name:</label>
				<input type="text" name="lastName" id="lastName" required="required" />
				<label for="email">* E-mail:</label>
				<input type="email" name="email" id="email" required="required" />
				<label for="phone">Phone Number:</label>
				<input type="tel" name="phone" id="phone" maxlength="12" />
				<label for="comments">Comments:</label>
				<textarea name="comments" id="comments" rows="5" cols="30" />
				<SubmitButton type="submit" value="Submit" />
      </ContactUsForm>
    );
  }
}

export default ContactUs;