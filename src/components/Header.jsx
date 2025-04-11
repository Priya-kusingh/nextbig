import React from 'react'
import "./Header.css";
import birdImage from "../assets/Bird1.png";
const Header = () => {
  return (
    <div>
      <section className="home-container">
      <div className="home-left">
        <h1>WE ARE NUTRIBIRD</h1>
        <p>
          We are NutriBird, for bird owners to carefree give the best to their birds.
          We’re obsessed with making birds look and perform at their best.
          We specialise in complete and balanced all-in-one nutrition formulas
          for all bird species, at every life stage.
        </p>
      </div>

      <div className="home-right">
        <img src={birdImage} alt="Birds" />
      </div>
    </section>
    </div>
  )
}

export default Header;
