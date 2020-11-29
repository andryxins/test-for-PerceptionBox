import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import CharactersList from '../../Components/CharactersList/CharactersList';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { getAllFavoriteCharactersByName } from '../../api/swapiApi';

const FavoriteCharactersPage = ({ user }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.likes.length === 0) return setIsLoading(false);

    const charactersNames = user.likes.map((item) => item.name);

    return getAllFavoriteCharactersByName(charactersNames).then(
      (characters) => {
        setCharacters(characters);
        setIsLoading(false);
      }
    );
  }, [user]);

  return (
    <>
      <PageTitle value="Favorite characters" />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <CharactersList
          isPagintationActive
          quantityOnPage={10}
          characters={characters}
        />
      )}
    </>
  );
};

FavoriteCharactersPage.propTypes = {
  user: PropTypes.object,
};

export default FavoriteCharactersPage;
