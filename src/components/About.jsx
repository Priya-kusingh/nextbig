import React from 'react'
import "./About.css";
import image from "../assets/Birds (2).png"
const About = () => {
  return (
    <div>
      <section className="about-section">
      <div className="about-left">
        <img src={image} alt="Visual" className="about-image" />
      </div>
      <div className="about-right">
        <h1>Your birds at their <br />
best, backed by <br />
experts</h1>
        <p>
        From canaries and parrots to toucans and hornbills. Making the right choice
in bird nutrition is a vital step in fulfilling the needs of your birds. You want
them to look and perform at their best. At every stage in their lives. But
where do you start? With NutriBird.
        </p>
      </div>
    </section>

    </div>
  )
}

export default About
