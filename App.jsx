import React from 'react';
import Header from './components/Header/Header'; // Importing the Header component
import HeroSection from './components/HeroSection/HeroSection'; // Importing the HeroSection component

const App = () => {
    return (
        <div className="app">
            {/* Header Section */}
            <Header />
            
            {/* Hero Section */}
            <HeroSection />
            
            {/* Other sections/components can be added here */}
        </div>
    );
};

export default App;
