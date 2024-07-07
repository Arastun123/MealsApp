import { createContext, useState } from "react";

export const FavoritesContex = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContexProvider({ children }) {
    const [favoritesMealIds, setFavoritesMealIds] = useState([]);

    function addFavorite(id) {
        setFavoritesMealIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id) {
        setFavoritesMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContex.Provider value={value}>{children}</FavoritesContex.Provider>
}

export default FavoritesContexProvider;