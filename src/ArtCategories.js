// src/ArtCategories.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ArtCategories() {
  const [searchTerm, setSearchTerm] = useState('');

  // Categories with associated images
  const categories = [
    { name: 'Bowls', image: "/img/Bowls/080A3372.JPG", snipper: 'Glass Bowls' },
    { name: 'Garden-Art', image: '/img/Garden art/Crocker bowl.jpg', snipper: 'Stunning garden art pieces' },
    { name: 'Flowers', image: '/img/All of them .jpg', snipper: 'Delicate flower art' },
    { name: 'Sun Catchers', image: '/img/Sun Catchers/Sun 1.jpg', snipper: 'Each sun catcher comes with a silver chain for hanging inside or outside' },
    { name: 'Glass Sculptures', image: '/img/Glass Sculptures/bloom.jpg', snipper: 'Glass Sculptures' }
  ];

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">

      <div className="categories">
        {filteredCategories.map(category => (
          <Link
            to={`/category/${category.name}`} // Route to category page
            key={category.name}
            className="art-link"
          >
            <div className="art-piece">
              <img src={category.image} alt={category.name} />
              <p>{category.snipper}</p> {/* Display snipper or description */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtCategories;
