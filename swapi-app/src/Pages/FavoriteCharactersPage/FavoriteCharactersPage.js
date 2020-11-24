import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import CharactersList from '../../Components/CharactersList/CharactersList';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { getCharacterByName } from '../../api/swapiApi';

const FavoriteCharactersPage = ({ user }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.likes.length === 0) return setIsLoading(false);

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
      <PageTitle value="Favorite characters" />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <CharactersList characters={characters} />
      )}
    </>
  );
};

FavoriteCharactersPage.propTypes = {
  user: PropTypes.object,
};

export default FavoriteCharactersPage;
