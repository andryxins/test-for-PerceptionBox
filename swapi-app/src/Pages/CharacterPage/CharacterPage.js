/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import LikeActionButton from '../../Components/LikeActionButton/LikeActionButton';
import GeneralCharacterDataTable from '../../Components/GeneralCharacterDataTable/GeneralCharacterDataTable';
import CharacterHomeWorld from '../../Components/CharacterHomeWorld/CharacterHomeWorld';
import CharacterVehicles from '../../Components/CharacterVehicles/CharacterVehicles';
import CharacterFilms from '../../Components/CharacterFilms/CharacterFilms';
import { getCharacterByName } from '../../api/swapiApi';

const CharacterPage = ({ match, user, userHandler }) => {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCharacter() {
      const character = await getCharacterByName(match.params.characterName);

      setIsLoading(false);
      return setCharacter(character);
    }

    getCharacter();
  }, []);

  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    const isCurrentCharacterLike = user.likes.find(
      (character) => character.name === match.params.characterName
    );

    return setIsFavorite(!!isCurrentCharacterLike);
  }, [user]);

  return (
    <>
      <h1>Character details</h1>
      {isFavorite ? (
        <LikeActionButton
          actionType="delete"
          user={user}
          userHandler={userHandler}
          character={character}
        />
      ) : (
        <LikeActionButton
          actionType="add"
          user={user}
          userHandler={userHandler}
          character={character}
        />
      )}

      {isLoading ? (
        <LinearProgress />
      ) : (
        <>
          <GeneralCharacterDataTable character={character} />
          <CharacterHomeWorld url={character.homeworld} />

          {character.vehicles && character.vehicles.length > 0 && (
            <CharacterVehicles vehiclesUrls={character.vehicles} />
          )}
          <CharacterFilms filmsUrls={character.films} user={user} />
        </>
      )}
    </>
  );
};

// CharacterPage.propTypes = {
//   match: PropTypes.shape({
//     params: {
//       characterName: PropTypes.string,
//     },
//   }),
// };

export default CharacterPage;
