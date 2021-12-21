import React from "react";
import { useSelector } from "react-redux";
import FavoritesTable from "../components/FavoritesTable";
import bright from "../pages/images/skyday.jpg";
import dark from "../pages/images/skynight.jpg";

const Favorites = () => {

  const themeSlice = useSelector(state => state.theme)
  return (
      <div
        style={{ backgroundImage: themeSlice === 'dark' ? `url(${dark})` : `url(${bright})` }}
        className={themeSlice !== 'dark' ? 'brightSide hero' : 'darkSide hero'}>
        <FavoritesTable />
      </div>
  );
}
export default Favorites