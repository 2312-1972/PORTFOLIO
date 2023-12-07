import React from 'react';
import '../animations/formulaire-contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Formulaire = () => {
  const [state, handleSubmit] = useForm('mqkvrpyp');

  if (state.succeeded) {
    return <p>Merci pour votre message!</p>;
  }

  return (
    <form
      className="back-intro"
      style={{ marginBottom: '30px', borderRadius: '10px' }}
      onSubmit={handleSubmit}
    >
      <div className="segment ">
        <h1>Contact</h1>
      </div>

      <label>
        <input type="text" name="first_name" placeholder="First Name" />
      </label>

      <label>
        <input type="text" name="email" placeholder="Email Address" />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label>
        <textarea
          className="form-control textarea"
          name="message"
          placeholder="Message"
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <div className="input-group"></div>
      <button className="red" type="submit" disabled={state.submitting}>
        <i className="icon ion-md-lock"></i> Submit
      </button>
    </form>
  );
};

export default Formulaire;
