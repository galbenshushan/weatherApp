export const getLoaclStorage = () => {
  let favorites = JSON.parse(localStorage.getItem("favoriteCity"));

  return favorites ? favorites : [];
};

export const saveToLocalStorage = (data) => {
  return localStorage.setItem("favoriteCity", JSON.stringify(data));
};
export const removeCityFromLocalStorage = (key) => {

  const favorites = getLoaclStorage();

  const exist = favorites.find((city) => city.cityKey === key);

  if (exist) {
    const filteredFavorites = favorites.filter((city) => city.cityKey !== exist.cityKey);

    saveToLocalStorage(filteredFavorites);
  } else {
    alert("Can't remove");
  }
};
