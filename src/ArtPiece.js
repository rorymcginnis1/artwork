import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArtPiece({ artworks }) {
  const { id } = useParams();
  const [art, setArt] = useState(null);

  useEffect(() => {
    const foundArt = artworks.find(a => a.id === parseInt(id));
    setArt(foundArt);
  }, [id, artworks]);

  if (!art) {
    return <div>Loading...</div>;
  }

  return (
    <div className="art-piece-detail">
      <h2>{art.name}</h2>
      <img src={art.image} alt={art.name} />
      <p style={{ whiteSpace: 'pre-line' }}>{art.snippet}</p>
    </div>
  );
}

export default ArtPiece;
