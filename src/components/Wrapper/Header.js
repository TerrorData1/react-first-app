import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/images/logo.png";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="logo" style={{height:"40px"}} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-white fw-bold" aria-current="page" to={"/bizness"}>Notre Entreprise</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to={"/service"}>Nos Prestations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to={"/blog"}>L'Actualité</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to={"/contact"}>Nous Contacter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div>
          <img src={slide1} alt="Slide 1" style={{ width: "100%", height: "400px" }} />
          </div>
          <div>
          <img src={slide2} alt="Slide 1" style={{ width: "100%", height: "400px" }} />
          </div>
          <div>
          <img src={slide3} alt="Slide 1" style={{ width: "100%", height: "400px" }} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
