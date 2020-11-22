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
