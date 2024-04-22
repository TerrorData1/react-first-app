import React, { useState, useRef, useEffect } from "react";

/* Les constantes `NameRegex` et `EmailRegex` sont des expressions régulières utilisées pour valider
les champs de saisie du formulaire. */
const NameRegex = /^[a-zA-Z\s-]{2,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FuncLifeCycle = () => {
  const [firstname, setFirstname] = useState('');
  const [validFirstname, setValidFirstname] = useState(false);
  
  const [lastname, setLastname] = useState('');
  const [validLastname, setValidLastname] = useState(false);
  
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');

/* Les lignes `const firstnameRef = useRef();`, `const lastnameRef = useRef();` et `const emailRef =
useRef();` créent trois références distinctes à l'aide du hook `useRef` dans React. */
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();


/* Ces hooks `useEffect` sont utilisés pour effectuer des effets secondaires dans les composants de
fonction. Voici ce que chacun d'eux fait : */
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
    setValidFirstname(NameRegex.test(value));
  }

  const handleLastnameChange = () => {
    const value = lastnameRef.current.value;
    setLastname(value);
    setValidLastname(NameRegex.test(value));
  }

  const handleEmailChange = () => {
    const value = emailRef.current.value;
    setEmail(value);
    setValidEmail(EmailRegex.test(value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
      {/* <h2>{firstname}</h2> */}
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
      {successMessage && <p className="text-success">{successMessage}</p>}

        <div className="form-floating mb-2">
          <input 
            id="firstname" 
            className={`form-control ${validFirstname ? 'is-valid' : 'is-invalid'}`} 
            type="text" 
            name="firstname" 
            ref={firstnameRef}
            value={firstname}
            onChange={handleFirstnameChange}
          />
          <label htmlFor="firstname" className="form-label d-flex">Prénom de l'utilisateur :</label>
          <div className="invalid-feedback">
            Veuillez entrer un prénom valide (au moins 2 caractères).
          </div>
        </div>
        <div className="form-floating mb-2">
          <input 
            id="lastname" 
            className={`form-control ${validLastname ? 'is-valid' : 'is-invalid'}`} 
            type="text" 
            name="lastname" 
            ref={lastnameRef}
            value={lastname}
            onChange={handleLastnameChange}
          />
          <label htmlFor="lastname" className="form-label d-flex">Nom de l'utilisateur :</label>
          <div className="invalid-feedback">
            Veuillez entrer un nom valide (au moins 2 caractères).
          </div>
        </div>
        <div className="form-floating mb-2">
          <input 
            id="email" 
            className={`form-control ${validEmail ? 'is-valid' : 'is-invalid'}`} 
            type="email" 
            name="email" 
            ref={emailRef}
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email" className="form-label d-flex">Email de l'utilisateur :</label>
          <div className="invalid-feedback">
            Veuillez entrer une adresse email valide.
          </div>
          <input className="btn btn-primary mt-2" type="submit" value="envoyer" />
        </div>
      </form>
    </>
  );
};

export default FuncLifeCycle;
