import { Link, NavLink } from "react-router-dom";
import img from "../../images/menu.png";

const Header = () => {
  return (
    <header className="py-2">
      <nav className="navbar navbar-expand-lg bg-transparent bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            filmographic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={img} alt="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  خانه
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  فیلم ها
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">
                  درباره ما
                </NavLink>
              </li>
            </ul>
            <Link to="/login-register" className="btn">
              ثبت نام / ورود
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
