import { Outlet } from "react-router-dom";
import Nav from "../Home/NavBar/Nav";


const Mainlayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;