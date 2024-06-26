import React from 'react';

const Personnage = ({nom, img, equipe}) => {
    return (
        <div className="card mt-3 m-auto" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt={"avis de recherche de " + nom} />
        <div className="card-body">
        <p className="card-title">Nom : {nom}</p>
          <p className="card-text">Equipage: {equipe}</p>
        </div>
      </div>
    );
};

export default Personnage;