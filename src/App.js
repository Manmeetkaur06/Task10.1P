// src/App.js
import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css';
import sampleImage from './assets/picture1.png'; // Add this line to import the image
import { Button } from 'semantic-ui-react'; // Don't forget to import Button if used

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* Add an image between the search bar and Featured Articles */}
        <img src={sampleImage} alt="Banner" className="banner-image" />
        
        <h2 className="section-title">Featured Articles</h2>
        <FeaturedArticles />
        
        <div className="button-container">
          <Button primary>See all articles</Button>
        </div>

        <h2 className="section-title">Featured Tutorials</h2>
        <FeaturedTutorials />
        
        <div className="button-container">
          <Button primary>See all tutorials</Button>
        </div>
      </div>

      {/* Footer section starts here */}
      <Footer />
    </div>
  );
}

export default App;
