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
    <Header />
    <section className="my-6">
      <LatestNews />
    </section>
    <nav className="my-12">
      <Navbar />
    </nav>
  </header>

  <main className="grid grid-cols-1 lg:grid-cols-12 gap-4">
  {/* Left + Main Content in one row on md and sm */}
  
    {/* Left Sidebar */}
    <aside className="lg:sticky lg:top-0 lg:h-fit lg:col-span-3">
      <LeftAside />
    </aside>

    {/* Main Content */}
    <div className="lg:col-span-6">
      {state === "loading" ? <Loading /> : <Outlet />}
    </div>
  

  {/* Right Sidebar */}
  <aside className="lg:col-span-3 lg:sticky lg:top-0 lg:h-fit">
    <RightAside />
  </aside>
</main>
</div>
    );
};

export default HomeLayout;