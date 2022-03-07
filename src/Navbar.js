import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar-container">
            <h1>Nobby Blogs</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blogs</Link>
                {/* <a href="#">About</a> */}

                {/* <a href="/">Home</a>
                <a href="/create">New Blogs</a>
                <a href="#">Contacts</a> */}

            </div>
        </nav>
    );
}

export default Navbar;