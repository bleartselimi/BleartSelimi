import "./MainLayout.css";
import { Outlet } from "react-router";
import { Footer, Navigation } from "..";
// import { SplashScreen } from "../../widgets";

const MainLayout = () => {
    return (
        <>
            {/* <SplashScreen /> */}
            <Navigation />
            <div className="main-layout">
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default MainLayout