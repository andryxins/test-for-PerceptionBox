export default (arr, query) =>
  query
    ? arr.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
    : arr;
