import { Outlet } from "react-router";
import "./MainLayout.css";
import { Footer, Navigation } from "../../components";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout