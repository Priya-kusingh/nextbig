import React from "react";
import "./Main.css";
import image from "../assets/Birds (2).png";
import image1 from "../assets/Circle.png";

const Main = () => {
  return (
    <div>
      <section className="main-section">
       
        <div className="main-left">
          <div className="main-text">
            <p>
              We are NutriBird, for bird owners to carefree give the best to
              their birds. We specialise in all-in-one nutrition formulas for
              all bird species. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Accusamus repellat iusto at blanditiis, nam
              dolores voluptas tempora eum amet autem similique aperiam libero
              consequatur, eius assumenda distinctio explicabo perspiciatis
              provident.
            </p>
          </div>

          
          <div className="circle-container">
            <img src={image1} alt="Bird" className="circle-image" />
            
          </div>
        </div>

      
        <div className="main-right">
          <img src={image} alt="Decoration" className="right-img" />
         
        </div>
      </section>
    </div>
  );
};

export default Main;
