import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id="about">
      <div className="container">
        <div className="banner">
            <div className="top">
                <div className="heading">ABOUT US</div>
                <p>The only thing we are serious about is Food</p>
            </div>
            <p className="mid">
                Welcome to our culinary haven where tradition meets innovation. We craft each dish with passion and the finest ingredients, delivering an unforgettable dining experience. Our expert chefs bring years of experience and creativity to every plate, ensuring every bite tells a story of quality, flavor, and dedication to excellence.
            </p>
            <Link to={"/"}>
            Explore Menu{" "}
            <span>
                <HiOutlineArrowNarrowRight />
            </span>
           </Link> 
        </div>
        <div className="banner">
            <img src="/About_side.avif" alt="aboutImage" />
        </div>
      </div>
    </section>
  );
};

export default About;
