import React, { useState, useRef, useEffect } from "react";

const NameRegex = /^[a-zA-Z\s-]{2,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FuncLifeCycle = () => {
  const [firstname, setFirstname] = useState('');
  const [validFirstname, setValidFirstname] = useState(null); // Initialise à null
  const [lastname, setLastname] = useState('');
  const [validLastname, setValidLastname] = useState(null); // Initialise à null
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(null); // Initialise à null

  const [successMessage, setSuccessMessage] = useState('');

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    firstnameRef.current.focus();
    console.log('Firstname:', firstname);
  }, [firstname]);

  useEffect(() => {
    console.log('Lastname:', lastname);
  }, [lastname]);

  useEffect(() => {
    console.log('Email:', email);
  }, [email]);

  const handleFirstnameChange = () => {
    const value = firstnameRef.current.value;
    setFirstname(value);
    setValidFirstname(NameRegex.test(value) ? true : false); // Met à jour à true si valide, sinon false
  }

  const handleLastnameChange = () => {
    const value = lastnameRef.current.value;
    setLastname(value);
    setValidLastname(NameRegex.test(value) ? true : false); // Met à jour à true si valide, sinon false
  }

  const handleEmailChange = () => {
    const value = emailRef.current.value;
    setEmail(value);
    setValidEmail(EmailRegex.test(value) ? true : false); // Met à jour à true si valide, sinon false
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validFirstname === null || validLastname === null || validEmail === null) {
      console.log('Veuillez remplir tous les champs.');
      return;
    }

    if (!validFirstname) {
      console.log('Le prénom est invalide');
      return;
    }

    if (!validLastname) {
      console.log('Le nom est invalide');
      return;
    }

    if (!validEmail) {
      console.log('L\'email est invalide');
      return;
    }

    console.log('Formulaire valide, envoi des données...');

    // Réinitialiser les champs après l'envoi
    setFirstname('');
    setLastname('');
    setEmail('');
    setSuccessMessage('Email envoyé avec succès!');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
        {successMessage && <p className="text-success">{successMessage}</p>}
        <div className="form-floating mb-2">
          <input 
            id="firstname" 
            className={`form-control ${validFirstname === true ? 'is-valid' : validFirstname === false ? 'is-invalid' : ''}`} 
            type="text" 
            name="firstname" 
            ref={firstnameRef}
            value={firstname}
            onChange={handleFirstnameChange}
          />
          <label htmlFor="firstname" className="form-label d-flex">Prénom de l'utilisateur :</label>
          {validFirstname === false && <div className="invalid-feedback">
            Veuillez entrer un prénom valide (au moins 2 caractères).
          </div>}
        </div>
        <div className="form-floating mb-2">
          <input 
            id="lastname" 
            className={`form-control ${validLastname === true ? 'is-valid' : validLastname === false ? 'is-invalid' : ''}`} 
            type="text" 
            name="lastname" 
            ref={lastnameRef}
            value={lastname}
            onChange={handleLastnameChange}
          />
          <label htmlFor="lastname" className="form-label d-flex">Nom de l'utilisateur :</label>
          {validLastname === false && <div className="invalid-feedback">
            Veuillez entrer un nom valide (au moins 2 caractères).
          </div>}
        </div>
        <div className="form-floating mb-2">
          <input 
            id="email" 
            className={`form-control ${validEmail === true ? 'is-valid' : validEmail === false ? 'is-invalid' : ''}`} 
            type="email" 
            name="email" 
            ref={emailRef}
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email" className="form-label d-flex">Email de l'utilisateur :</label>
          {validEmail === false && <div className="invalid-feedback">
            Veuillez entrer une adresse email valide.
          </div>}
          <input className="btn btn-primary mt-2" type="submit" value="envoyer" />
        </div>
      </form>
    </>
  );
};

export default FuncLifeCycle;
