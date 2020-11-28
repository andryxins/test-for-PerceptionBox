export default (characterName) => {
  return characterName.split('-').join('%20');
};
