import { Suspense } from "react";
import Categories from "../Categories/Categories";


const LeftAside = () => {
    return (
        <div>
            <Suspense>
           <Categories></Categories>
            </Suspense>
           
        </div>
    );
};

export default LeftAside;