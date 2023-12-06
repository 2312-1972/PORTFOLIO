// src/components/Contact.js
import React from 'react';
import '../animations/formulaire-contact.css'




const Formulaire= () => {
  return (
    <form className='back-intro' style={{marginBottom:'30px', borderRadius:'10px'}}>
      <div className="segment ">
        <h1>Contact</h1>
      </div>

      <label>
        <input type="text" placeholder="Email Address" />
      </label>
      <label>
        <input type="first name" placeholder="First Name" />
      </label>
        <label>
          <input type="text" placeholder="Message" style={{height:"100px", width:'320px',borderRadius:'15px'}}/>
        </label>
     <div className="input-group">
        </div>
     <button className="red" type="button">
        <i className="icon ion-md-lock"></i> Submit
      </button>
    </form>
  );
};

export default Formulaire;
