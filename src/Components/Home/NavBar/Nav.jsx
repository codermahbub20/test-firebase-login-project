import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>

        </div>
    );
};

export default Nav;