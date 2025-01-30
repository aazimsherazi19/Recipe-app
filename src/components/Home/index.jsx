import { GlobalContext } from "../context/context"
import RecipeItem from "../recipe-item/recipeItem"
import { useContext } from "react";





export default function Home(){
    const {loading, recipeList} = useContext(GlobalContext);

    if(loading) return <div className="lg:text-4xl text-xl text-black text-center font-extrabold">Loading...Please Wait</div>
    return (
        <div className="container mx-auto py-8 flex flex-wrap gap-5 justify-center">
            {
                recipeList && recipeList.length > 0 ? 
                recipeList.map((item)=> <RecipeItem item={item}/>)
                : <div className="lg:text-4xl text-xl text-black text-center font-extrabold">
                    <p>Nothing to Show.Please search something else</p>
                </div>
            }
        </div>
    )
}