/* eslint-disable no-unused-vars */
import axios from 'axios';

export const getAllcharacters = async () => {
  let characters = [];

  const getAllResponce = async (url = 'https://swapi.dev/api/people/') => {
    const { data } = await axios.get(url);
    characters = [...characters, ...data.results];

    if (data.next) return getAllResponce(data.next);
  };

  await getAllResponce();
  return characters.map((item, idx) => ({ ...item, id: idx + 1 }));
};

export const getCharacterByName = (name) =>
  axios
    .get(`https://swapi.dev/api/people/?search=${name}`)
    .then(({ data }) => data.results[0]);

export const getAllFavoriteCharactersByName = async (arrayOfNames) =>
  Promise.all(arrayOfNames.map((name) => getCharacterByName(name)));

export const getAdditionalInformation = (url) =>
  axios.get(url).then((res) => res.data);
