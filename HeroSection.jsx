import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    Explore the Possibilities of <span className="highlight">AI 🤖</span> with <span className="brand-name">GENIFY</span>
                </h1>
                <p className="hero-description">
                    Transform the way you work with AI tools for Marketing
                </p>
                <button className="cta-button">Get Started Free</button>
            </div>
        </section>
    );
};

export default HeroSection;
