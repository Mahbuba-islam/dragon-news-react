import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div className="container mx-auto">
            <header>
                <Header></Header>
                <section className="my-6">
                    <LatestNews></LatestNews>
                </section>
                <nav className="my-12">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className=" grid grid-cols-12">
               <aside className="col-span-3 sticky top-0 h-fit ">
                <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6">
                   {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className="col-span-3 sticky top-0 h-fit"><RightAside></RightAside></aside>

                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;