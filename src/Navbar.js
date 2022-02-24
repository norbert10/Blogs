const Navbar = () => {
    return (
        <nav className="navbar-container">
            <h1>Nobby Blogs</h1>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">New Blogs</a>
                {/* <a href="#">About</a> */}
                <a href="#">Contacts</a>

            </div>
        </nav>
    );
}

export default Navbar;