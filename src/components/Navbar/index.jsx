import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../context/context"



export default function Navbar(){
    const {searchParam, setSearchParam, handleSumbit} = useContext(GlobalContext);
    console.log(searchParam);
    return (
        <nav className="container mx-auto flex py-8 justify-between lg:flex-row gap-5 lg:gap-0 ">
            <div className="text-2xl font-semibold">
            <NavLink 
                    to={'/'}
                    >
                        FoodRecipe
                    </NavLink>
            </div>
            <form onSubmit={handleSumbit}>
                <input 
                type="text"
                name="search"
                placeholder="Enter item here..."
                value={searchParam}
                onChange={(event)=> setSearchParam(event.target.value)}
                className="bg-white/75 p-3 px-8 rounded-full lg:w-96 outline-none shadow-lg shadow-red-100 focus:shadow-red-200" />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink 
                    to={'/'}
                    className='text-black hover:text-gray-700 duration-300'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/favourites'}
                    className='text-black hover:text-gray-700 duration-300'
                    >
                        Favourite
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}