import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/profile_pic.jpg",
    name: "Shrunal Pothagoni",
    designation: "Mathematician, Machine Learning Engineer, Computer Vision Scientist",
    text: (
      <>
        <p>
          I am currently in the second year of my Ph.D. at George Mason University 
          and am studying mathematics under the guidance of Dr. Benjamin Schweinhart.
          I am broadly interested in the intersection of computational geometry and 
          topology and machine learning.  
        </p>
        <p>
          My research interests are focused on studying the local geometric properties 
          of cell structures that naturally arise in fields such as materials science and 
          biology. In particular, I am interested in studying how the local geometry of 
          an image can be used to understand its global behavior using machine learning 
          algorithms.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
