import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 bg-white/75 gap-5 p-5 rounded-xl shadow-xl border-2 border-white overflow-hidden">
      <div className="flex justify-center items-center h-40 rounded-xl gap-5 overflow-hidden">
        <img src={item?.image_url} alt="recipe-item" className="block w-full" />
      </div>
      <div>
        <span className="text-cyan-700 text-sm font-medium ">
          {item?.publisher}
        </span>
        <h3 className="text-2xl font-bold truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 px-8 mt-5 rounded-lg inline-block font-medium bg-black uppercase text-white cursor-pointer tracking-wider"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
