import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';
import sampleImage from './assets/picture1.png'; 

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        {/* Banner image */}
        <img src={sampleImage} alt="Banner" className="app-banner-image" />

        {/* Featured Articles Section */}
        <h2 className="app-section-title">Featured Articles</h2>
        <FeaturedArticles />
        
        <div className="app-button-container">
          <button className="app-button">See all articles</button>
        </div>

        {/* Featured Tutorials Section */}
        <h2 className="app-section-title">Featured Tutorials</h2>
        <FeaturedTutorials />
        
        <div className="app-button-container">
          <button className="app-button">See all tutorials</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
