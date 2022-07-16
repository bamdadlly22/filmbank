import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      {" "}
      <footer className="pt-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="d-flex">
                <li className="">
                  <Link to="/">خانه</Link>
                </li>
                <li className="ms-4">
                  <Link to="/movies">فیلم ها</Link>
                </li>
                <li className="ms-4">
                  <Link to="/about-us">درباره ما</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="text-end">all rights reserved to filmographic</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
