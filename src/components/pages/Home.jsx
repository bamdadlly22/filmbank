import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/services";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getMovies()
      .then((m) => {
        setMovies(m.data);
        setLoading(false);
      })
      .catch((err) => {setError(true);
        setLoading(false);});
  }, []); 
  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-between">
            <h1>
              <span className="film-bank"> فیلموگرافیک؛</span> بانک اطلاعاتی فیلم و سریال ها
            </h1>
            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="فیلم مورد نظر رو پیدا کن..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => setSearchValue(e.target.value)}
              />
              {searchValue? <Link to={`/movies?q=${searchValue}`}>
              <span className="btn d-flex input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
              </span>
              </Link> : <span className="btn d-flex input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
              </span>}
              {/* <Link to={`/movies?q=${searchValue}`}>
              <span className="btn d-flex input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
              </span>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="best">
        <div className="container">
          <div className="row flex-md-nowrap">
            <div className="col-lg-8">
              <h2 className="mb-5">فیلم های برتر</h2>
              {loading && 
              <div className="d-flex justify-content-center">
                 <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}
              {error? 
                (<div className="text-center text-danger">
                  <h3 className="py-5">مشکلی پیش آمده است!</h3>
                </div>) : null
              }
              {movies &&
                movies.map((movie) => (
                  <div key={movie.id} className="card mb-4">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img
                          className="img-fluid rounded-start"
                          src={movie.poster}
                          alt=""
                        />
                      </div>
                      <div className="col-md-5">
                        <p className="card-text fw-bold txt-up">
                          نام فیلم:
                          <span className="fw-normal"> {movie.title}</span>
                        </p>
                        <p className="card-text fw-bold txt-up">
                          سال ساخت:
                          <span className="fw-normal"> {movie.year}</span>
                        </p>
                        <p className="card-text fw-bold">
                          کشور:
                          <span className="fw-normal"> {movie.country}</span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <p className="card-text fw-bold txt-up">
                          امتیاز:
                          <span className="fw-normal">
                            {" "}
                            {movie.imdb_rating}
                          </span>
                        </p>
                        <p className="card-text fw-bold txt-up">
                          ژانر:
                          <span className="fw-normal">
                            {" "}
                            {`${movie.genres[0]} ${
                              movie.genres[1] ? "," + movie.genres[1] : ""
                            }`}
                          </span>
                        </p>
                        <Link to={`/movies/${movie.id}`} className="btn">مشاهده بیشتر</Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-4 ms-md-3">
              <h2 className="mb-5">آخرین فیلم ها</h2>
              <div className="card sticky-top">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">the titanic</li>
                  <li className="list-group-item">spiderman 3</li>
                  <li className="list-group-item">12 years slaves</li>
                  <li className="list-group-item">hereditary</li>
                  <li className="list-group-item">mr.Nobody</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
