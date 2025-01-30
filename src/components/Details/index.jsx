import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/context";





export default function Details(){
    const {id} = useParams()
    const {recipeDetailsData, setRecipeDetailsData, handleAddToFavourite, favouritesList} = useContext(GlobalContext)
    useEffect(()=>{
     async function getRecipeDetails(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();
      if(data?.data){
        setRecipeDetailsData(data?.data);
        console.log(recipeDetailsData)
      }
     }
     getRecipeDetails()
    },[])

    

    
  return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto ">
       <div className="h-96 overflow-hidden rounded-xl group">
         <img className="w-full h-full object-cover group-hover:scale-105 block duration-300 " src={recipeDetailsData?.recipe?.image_url} alt="Food Image" />
       </div>
      </div>
      <div className="flex flex-col gap-2">
         <span className="text-cyan-700 text-sm font-medium ">{recipeDetailsData?.recipe?.publisher}</span>
         <h3 className="text-2xl font-bold truncate text-black">{recipeDetailsData?.recipe?.title}</h3>
        <div>
        <button onClick={()=> handleAddToFavourite(recipeDetailsData?.recipe)} className="text-sm p-3 px-8 mt-5 rounded-lg inline-block font-medium bg-black uppercase text-white cursor-pointer tracking-wider hover:scale-95 duration-300">{
          favouritesList && favouritesList.length && favouritesList.findIndex((item)=> item.id === recipeDetailsData?.recipe.id) !== -1 ? 'Remove From Favourites' : 'Add to Favourites'
          }</button>
        </div>
        <div>
          <span className="text-2xl text-black font-semibold ">Ingredients:</span>
        <ul className="flex flex-col gap-3 mt-3">
          {
            recipeDetailsData?.recipe?.ingredients.map((ingredient)=> <li> 
              <span className="first-letter:uppercase text-xl text-black font-semibold">- {ingredient.quantity} { ingredient.unit} </span>
              <span className="first-letter:uppercase text-xl text-black font-semibold">{ingredient.description} </span>
              
            </li>)
          }
        </ul>
        </div>
       
      </div>
  </div>
}