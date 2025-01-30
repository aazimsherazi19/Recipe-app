import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate()

  async function handleSumbit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setSearchParam("");
        setLoading(false);
        navigate('/')
      }
    } catch (e) {
      console.log(e);
      setSearchParam("");
      setLoading(false);
    }
    console.log(recipeList);
  }

  function handleAddToFavourite(getCurrentItem) {
    console.log(getCurrentItem);
    let copy = [...favouritesList];
    const index = copy.findIndex(item=> item.id === getCurrentItem.id)
    if(index === -1){
      copy.push(getCurrentItem)
    } else{
      copy.splice(index)
    }
    setFavouritesList(copy);
    console.log(favouritesList)
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSumbit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        handleAddToFavourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
