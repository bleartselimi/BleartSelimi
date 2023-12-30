import "./MainLayout.css";
import { Outlet } from "react-router";
import { Footer, Navigation } from "..";

const MainLayout = () => {
    return (
        <>
            <Navigation />
            <div className="main-layout">
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default MainLayout