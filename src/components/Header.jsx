import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const { setSearchText } = props;
  const location = useLocation();
  const [input, setInput] = useState("");

  // console.log(location)
  let allPaths = ["/", "/products", "/register", "/login"];
  let i = allPaths.findIndex((x) => location.pathname === x);
  // console.log(i)

  const hdlSubmit = (e) => {
    e.preventDefault();
    setSearchText(`&q=${input}`);
  };

  const hdlChange = e => {
    // console.log(e.target.value.trim().length)
    setInput(e.target.value)
    if(!e.target.value.trim().length)
        setSearchText('')
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CC12
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${i === 0 && "active"}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${i === 1 && "active"}`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${i === 2 && "active"}`}
                to="/register"
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${i === 3 && "active"}`} to="/login">
                Login
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={hdlSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={hdlChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
