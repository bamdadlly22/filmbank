import { useEffect, useState } from "react";
import { getMovies } from "../../services/services";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies()
      .then((m) => {
        setMovies(m.data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-between">
            <h1>
              <span className="film-bank"> فیلم بانک؛</span> بانک اطلاعاتی فیلم
              ها
            </h1>
            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="فیلم مورد نظر رو پیدا کن..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="btn d-flex input-group-text" id="basic-addon1">
                جستوجو
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="best">
        <div className="container">
          <div className="row flex-md-nowrap">
            <div className="col-lg-8">
              <h2 className="mb-5">فیلم های برتر</h2>
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
                        <button className="btn">مشاهده بیشتر</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-4 ms-md-3">
              <h2 className="mb-5">آخرین فیلم ها</h2>
              <div className="card sticky-top">
                <ul className="list-group list-group-flush">
                  <li class="list-group-item">the titanic</li>
                  <li class="list-group-item">spiderman 3</li>
                  <li class="list-group-item">12 years slaves</li>
                  <li class="list-group-item">hereditary</li>
                  <li class="list-group-item">mr.Nobody</li>
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
