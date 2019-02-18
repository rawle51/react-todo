export const getTitleFromLocalStorage = (key = "title") => {
  try {
    const state = localStorage.getItem(key);
    if(state === null) {
      return undefined;
    } else {
      return JSON.parse(state);
    }
  } catch (error) {
    // необходимо вернуть undefined чтобы reducer использовал дефолтное значение
    return undefined;
  }
}