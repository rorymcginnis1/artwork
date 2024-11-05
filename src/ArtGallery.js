// src/ArtGallery.js
import React, { useState, useEffect } from 'react';
import { Link , useParams} from 'react-router-dom';

function ArtGallery({ artworks }) {
  const { category } = useParams(); // Get the category parameter from the URL
  const [searchTerm, setSearchTerm] = useState('');

  // Normalize the category
  const normalizedCategory = category ? category.trim().toLowerCase() : '';

  // Filter artworks based on the category and search term
  const filteredArtworks = artworks.filter(art => {
    const isCategoryArray = Array.isArray(art.category);
    const normalizedArtCategories = isCategoryArray
      ? art.category.map(cat => cat.trim().toLowerCase())
      : [];

    const matchesCategory = normalizedArtCategories.includes(normalizedCategory);
    const matchesSearchTerm = art.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="App">
      <div className="gallery">
        {filteredArtworks.map(art => (
          <Link
            to={`/art/${art.id}`}
            key={art.id}
            className="art-link"
          >
            <div className="art-piece">
              <img src={art.image} alt={art.name} />
              <p>{art.name}</p>
              <p>{art.snipper}</p> {/* Display the snipper field */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtGallery;
