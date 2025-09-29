import { use } from "react";

const categoryPromise = fetch("/categories.json").then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise)

    return (
        <div>
            All Categories {categories.length}
        </div>
    );
};

export default Categories;