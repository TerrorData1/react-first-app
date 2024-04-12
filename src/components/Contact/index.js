import React from "react";
import Wrapper from "../Wrapper";
import ContactForm from "./ContactForm"; // Importez le composant ContactForm

const index = () => {
  return (
    <Wrapper>
      <h1 className="text-primary">Page Contact</h1>
      <div className="d-flex justify-content-center">
      <ContactForm /> {/* Appel du composant ContactForm */}
      </div>
    </Wrapper>
  );
};

export default index;
