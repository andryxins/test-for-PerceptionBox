import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PageTitle from '../../Components/PageTitle/PageTitle';
import CharactersList from '../../Components/CharactersList/CharactersList';
import { getAllcharacters } from '../../api/swapiApi';
import SearchBarAutoComplete from '../../Components/SearchBar/SearchBarAutoComplete';
import Styles from './HomePage.module.css';

const HomePage = () => {
  const [characters, setCharacters] = useState(null);
  const [filterQuery, setFilterQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllCharacters() {
      const allCharacters = await getAllcharacters();

      setIsLoading(false);
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
      <PageTitle value="Star Wars Characters" />
      {isLoading && <LinearProgress />}
      <SearchBarAutoComplete
        characters={characters}
        onChange={setFilterQuery}
        filterQuery={filterQuery}
        // have some warnings with autocomplete, need more time to fix.
        //Not sure that I made it right way, but it's works
      />
      <CharactersList
        characters={filteredCharacters(characters, filterQuery)}
      />
    </div>
  );
};

export default HomePage;
