import "./MainLayout.css";
import { Outlet } from "react-router";
import { Footer, Navigation } from "..";

const MainLayout = () => {
    const fetchData = () => new Promise(resolve => setTimeout(resolve, 3000));

    // Wrap the asynchronous operation with Suspense
    const data = fetchData();

    // This will suspend rendering until the data is ready
    if (!data) {
        throw data;
    }

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