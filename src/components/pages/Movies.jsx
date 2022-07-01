import { useEffect } from "react";
import { useState } from "react";
import { getMovies, paginateMovies, searchMovies } from "../../services/services";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from 'react-paginate';




const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(false);


    useEffect(() => {

        // console.log(searchParams.get("q"));
        if(searchParams.get("q")) {
          let movieName = searchParams.get("q");
          searchMovies(movieName).then(data => {setMovies(data.data); setLoading(false);}).catch(err => {setError(true); setLoading(false)}); 
        } else {
          getMovies().then(data => {setMovies(data.data); setLoading(false);}).catch(err => {setError(true); setLoading(false)});
        }
    },[searchParams.get("q")])
    const handlePageClick = (e) => {
      setLoading(true);
      paginateMovies(e.selected + 1).then(data => {setMovies(data.data); setLoading(false);}).catch(err => {setError(true); setLoading(false)});
    }
    return(
        <>
        <section className="all-movies mt-5">
        <div className="container">
              {searchParams.get("q")? <h1 className="mb-5">نتایج یافت شده : </h1> : <h1 className="mb-5">همه فیلم ها</h1>}
              <div className="row">
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
                {searchParams.get("q") === null? (                
                <div className="paginate">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="بعدی >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={25}
                    previousLabel="< قبلی"
                    renderOnZeroPageCount={null}
                 />
                </div>) : null }
            </div>
      </section>
      <div className="text-center mt-5">
        {/* <button className="btn btn-lg">مشاهده بیشتر</button> */}
      </div>
        </>
    );
}

export default Movies;