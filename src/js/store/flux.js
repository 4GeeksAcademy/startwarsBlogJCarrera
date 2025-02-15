//import { toast } from "sonner";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      startships: [],
      planets: [],
      favorites: [],
      counterFavorites: 0
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          if (response.ok) {
            const data = await response.json();
            setStore({ characters: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },

      getstartships: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/startships");
          if (response.ok) {
            const data = await response.json();
            setStore({  startships: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets");
          if (response.ok) {
            const data = await response.json();
            setStore({ planets: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },

      addFavorite: async (item) => {
        const store = getStore();
        if (store.favorites.find((favorite) => favorite === item)) {
         // toast.error("Favorite already exists");
        } else {
          setStore({ favorites: [...store.favorites, item] });
          setStore({ counterFavorites: store.counterFavorites + 1 });
         // toast.success("Added to favorites");
        }
      },

      deleteFavorite: async (id) => {
        const store = getStore();
        if (id) {
          const filterFavorite = store.favorites.filter(
            (favorite) => favorite.url !== id
          );
          setStore({ favorites: filterFavorite });
          setStore({ counterFavorites: store.counterFavorites - 1 });
        }
      },
    },
  };
};

export default getState;