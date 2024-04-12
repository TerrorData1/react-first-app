import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const ContactForm = () => {
  // États pour les champs du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer le formulaire
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Message:", message);
    // Réinitialiser les champs du formulaire après soumission
    setNom("");
    setEmail("");
    setMessage("");
  };

  return (
    <Card style={{ width: "400px" }}>
      <Card.Body>
        <Card.Title className="text-center mb-4">Contactez-nous</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Entrez votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            Envoyer
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
