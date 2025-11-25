import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <section className="heroSection" id="heroSection">
            <Navbar />
            <div className="container">
                <div className="banner">
                    <div className="largeBox">
                        <h1 className="title"><span className="hero-accent">Culinary</span> Excellence</h1>
                        <p className="heroSubtext">Experience the finest flavors crafted with passion and premium ingredients. Join us for an unforgettable dining journey where tradition meets innovation.</p>
                    </div>
                    <div className="combined_boxes">
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h2 className="title dishes_title"><span className="hero-accent">Signature Dishes</span></h2>
                                <p className="heroDescription">Discover our award-winning menu featuring seasonal delicacies and timeless classics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="heroStats">
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Happy Customers Daily</p>
                        </div>
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Expert Chefs</p>
                        </div>
                        <div className="stat-item">
                            <h3>100+</h3>
                            <p>Signature Dishes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;