import React from "react";
import "../animations/formulaire-contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Formulaire = () => {
  const [state, handleSubmit] = useForm("mqkvrpyp");

  if (state.succeeded) {
    return <p style={{color:'black', fontWeight:'900', fontFamily:'Poppins', fontSize:'32px', textShadow:'0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7'}}>Merci pour votre message!</p>;
  }

  return (
    <form
      className="back-contact"
      style={{ marginBottom: "30px", borderRadius: "10px" }}
      onSubmit={handleSubmit}
    >
      <div className="segment ">
        <h1>Contact</h1>
      </div>
      <label>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required // Champ obligatoire
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required // Champ obligatoire
          aria-invalid={state.errors && state.errors.email ? "true" : "false"}
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label>
        <textarea
          className="form-control textarea"
          name="message"
          placeholder="Message"
        />
      </label>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <div className="input-group"></div>
      {state.errors && state.errors.email && (
        <p style={{ color: "red" }}>Veuillez saisir une adresse e-mail valide.</p>
      )}
      <button className="red" type="submit" disabled={state.submitting}>
        <i className="icon ion-md-lock"></i> Submit
      </button>
    </form>
  );
};

export default Formulaire;
