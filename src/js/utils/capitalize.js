function capitalizeFirstLetter(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const stringWithoutFirstLetter = str.slice(1);
  return firstLetter + stringWithoutFirstLetter;
}

export default capitalizeFirstLetter;
