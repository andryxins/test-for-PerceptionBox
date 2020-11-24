/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CharactersList from '../../Components/CharactersList/CharactersList';
import { getCharacterByName } from '../../api/swapiApi';

const FavoriteCharactersPage = ({ user }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user.likes.length === 0) return;

    async function getAllVehicles() {
      await user.likes.forEach((character) =>
        getCharacterByName(character.name).then((character) => {
          setCharacters((prev) => [...prev, character]);
          setIsLoading(false);
        })
      );
    }

    getAllVehicles();
  }, [user]);

  return (
    <>
      <h2>Favorite characters</h2>
      {isLoading ? (
        <h3>LOADING</h3>
      ) : (
        <CharactersList characters={characters} />
      )}
    </>
  );
};

export default FavoriteCharactersPage;
