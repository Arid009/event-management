import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";



const MainLayout = () => {
    return (
        <div className="max-w-[1400px] font-inter container mx-auto">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;