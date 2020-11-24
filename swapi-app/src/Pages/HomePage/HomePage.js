import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CharactersList from '../../Components/CharactersList/CharactersList';
import { getAllcharacters } from '../../api/swapiApi';
import SearchBarAutoComplete from '../../Components/SearchBar/SearchBarAutoComplete';
import Styles from './HomePage.module.css';

const HomePage = () => {
  const [characters, setCharacters] = useState(null);
  const [filterQuery, setFilterQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllCharacters() {
      setIsLoading(true);
      const allCharacters = await getAllcharacters();

      setIsLoading(false);
      console.log(allCharacters);
      return setCharacters(allCharacters);
    }

    getAllCharacters();
  }, []);

  const filteredCharacters = (arr, query) =>
    query
      ? arr.filter(({ name }) =>
          name.toLowerCase().includes(filterQuery.toLowerCase())
        )
      : arr;

  return (
    <div className={Styles.pageContainer}>
      <h1 className={Styles.pageTitle}>Star Wars Characters:</h1>
      {isLoading && <LinearProgress />}
      <SearchBarAutoComplete
        characters={characters}
        onChange={setFilterQuery}
        filterQuery={filterQuery}
      />
      <CharactersList
        characters={filteredCharacters(characters, filterQuery)}
      />
    </div>
  );
};

export default HomePage;
