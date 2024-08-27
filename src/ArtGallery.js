import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ArtGallery({ artworks }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArtworks = artworks.filter(art =>
    art.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by art name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtGallery;
