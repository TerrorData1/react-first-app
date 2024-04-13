import React from "react";
import Wrapper from "../Wrapper";
import ContactForm from "./ContactForm"; // Importez le composant ContactForm

const index = () => {
  return (
    <Wrapper>
      <h2 className="text-black d-flex justify-content-center pt-5 fw-bold">Page Contact</h2>
      <div className="d-flex justify-content-center">
      <ContactForm /> {/* Appel du composant ContactForm */}
      </div>
    </Wrapper>
  );
};

export default index;
