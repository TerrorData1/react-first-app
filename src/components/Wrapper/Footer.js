
const Footer = () => {
    return (
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; {new Date().getFullYear()} Votre Nom / Nom du Projet</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;