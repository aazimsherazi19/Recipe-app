import { useContext } from "react";
import { GlobalContext } from "../context/context";
import RecipeItem from "../recipe-item/recipeItem";




export default function Favourites(){
    const {favouritesList} = useContext(GlobalContext);

    
    return (
        <div className="container mx-auto py-8 flex flex-wrap gap-5 justify-center">
            {
                favouritesList && favouritesList.length > 0 ? 
                favouritesList.map((item)=> <RecipeItem item={item}/>)
                : <div className="lg:text-4xl text-xl text-black text-center font-extrabold">
                    <p>Nothing is added in Favourites</p>
                </div>
            }
        </div>
    )
}