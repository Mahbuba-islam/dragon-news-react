import { use } from "react";
import { NavLink } from "react-router-dom";

const categoryPromise = fetch("/categories.json").then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise)

    return (
        <div>
            <h1 className="font-bold text-center ">All Categories - {categories.length}</h1>
            <div className="grid lg:grid-cols-1 mt-7 gap-3 grid-cols-6">
             {
            categories.map(category => <NavLink className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent text-xs"} to={`/category/${category.id}`} key={category.id}  >{category.name}</NavLink>)
          }
            </div>
          
        </div>
    );
};

export default Categories;