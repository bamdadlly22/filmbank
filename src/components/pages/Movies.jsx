import { useEffect } from "react";
import { useState } from "react";
import { getMovies } from "../../services/services";
import { Link } from "react-router-dom";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies().then(data => setMovies(data.data)).catch(err => console.log(err));
    },[])
    return(
        <>
        <section className="all-movies mt-5">
        <div className="container">
              <h1 className="mb-5">همه فیلم ها</h1>
              <div className="row">
              {movies &&
                movies.map((movie) => (
                  <div key={movie.id} className="col-md-6">
                  <div className="card mb-4">
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
                        <Link to={`${movie.id}`} className="btn">مشاهده بیشتر</Link>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
                </div>
            </div>
      </section>
      <div className="text-center mt-5">
        <button className="btn btn-lg">مشاهده بیشتر</button>
      </div>
        </>
    );
}

export default Movies;