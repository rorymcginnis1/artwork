import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ArtGallery from './ArtGallery';
import ArtPiece from './ArtPiece';
import Header from './Header';
import Footer from './Foot';
import About from './About';

function App() {
  const [artworks, setArtworks] = useState([]);
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    fetch('/art.json')
      .then(response => response.json())
      .then(data => setArtworks(data))
      .catch(error => console.error('Error fetching the art data:', error));
    
    fetch('/footer.json')
      .then(response => response.json())
      .then(data => setFooterData(data))
      .catch(error => console.error('Error fetching the footer data:', error));
  }, []);

  return (
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<ArtGallery artworks={artworks} />} />
          <Route path="/art/:id" element={<ArtPiece artworks={artworks} />} />
          <Route path="/about" element={<About />} />      {}
        </Routes>
        <Footer data={footerData} />
      </div>
    </Router>
  );
}

export default App;