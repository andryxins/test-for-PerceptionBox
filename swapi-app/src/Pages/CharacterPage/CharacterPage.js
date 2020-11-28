import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import PageTitle from '../../Components/PageTitle/PageTitle';
import LikeActionButton from '../../Components/LikeActionButton/LikeActionButton';
import GeneralCharacterDataTable from '../../Components/GeneralCharacterDataTable/GeneralCharacterDataTable';
import CharacterHomeWorld from '../../Components/CharacterHomeWorld/CharacterHomeWorld';
import CharacterVehicles from '../../Components/CharacterVehicles/CharacterVehicles';
import CharacterFilms from '../../Components/CharacterFilms/CharacterFilms';
import parceUrlWithDeletedSpaces from '../../libs/parceUrlWithDeletedSpaces';
import { getCharacterByName } from '../../api/swapiApi';

const CharacterPage = ({ match, user, userHandler }) => {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCharacter() {
      const characterData = await getCharacterByName(
        parceUrlWithDeletedSpaces(match.params.characterName)
      );

      setIsLoading(false);
      return setCharacter(characterData);
    }

    getCharacter();
  }, []);

  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    const isCurrentCharacterLike = user.likes.find(
      (character) =>
        character.name === match.params.characterName.split('-').join(' ')
    );

    return setIsFavorite(!!isCurrentCharacterLike);
  }, [user]);

  return (
    <>
      <PageTitle value="Character details" />
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

CharacterPage.propTypes = {
  match: PropTypes.any,
  user: PropTypes.object,
  userHandler: PropTypes.func,
};

export default CharacterPage;
