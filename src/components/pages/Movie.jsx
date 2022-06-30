import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getMovie } from "../../services/services";
import { Rating } from 'react-simple-star-rating';

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [rating, setRating] = useState(0);
    useEffect(() => {
     getMovie(id).then(data => {setMovie(data); console.log(data)}).catch(err => console.log(err));   
    },[])
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
      }
    return (<>
    <section className="movie-info my-5 py-5">
        <div className="container">
            <div key={movie.id} className="row align-items-start justify-content-between">
                <div className="col-md-4 text-center">
                    <img src={movie.poster} alt="" className="thumbnail"/>
                </div>
                <div className="col-md-5">
                    <h2>{movie.title}</h2>
                    <ul class="list-group list-group-flush">
                       <li class="list-group-item"><i class="bi bi-folder2-open me-2"></i><span>ژانر: </span>{movie.genres? movie.genres.map(genre => (genre + " ")) : null}</li>
                       <li class="list-group-item"><img className="me-2 imdb" src="https://img.icons8.com/ios/50/06BB00/imdb.png"/><span>امتیاز: </span>{movie.imdb_rating}</li>
                       <li class="list-group-item"><i class="bi bi-bar-chart-line me-2"></i><span>تعداد رای: </span>{movie.imdb_votes}</li>
                       <li class="list-group-item"><i class="bi bi-person me-2"></i><span>کارگردان: </span>{movie.director}</li>
                       <li class="list-group-item"><i class="bi bi-people me-2"></i><span>بازیگران: </span>{movie.actors}</li>
                       <li class="list-group-item"><i class="bi bi-flag me-2"></i><span>کشور: </span>{movie.country}</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2 className="like"><Rating onClick={handleRating} ratingValue={rating} /* Available Props */ /></h2>
                <ul class="list-group list-group-flush">
                       <li class="list-group-item"><i class="bi bi-calendar4 me-2"></i><span>سال ساخت: </span>{movie.year}</li>
                       <li class="list-group-item"><i class="bi bi-dash-circle me-2"></i><span>رده سنی: </span>{movie.rated}</li>
                       <li class="list-group-item"><i class="bi bi-calendar2-week me-2"></i><span>تاریخ انتشار: </span>{movie.released}</li>
                       <li class="list-group-item"><i class="bi bi-clock me-2"></i><span>مدت زمان: </span>{movie.runtime}</li>
                       <li class="list-group-item"><i class="bi bi-graph-up me-2"></i><span>امتیاز متا: </span>{movie.metascore}</li>
                    </ul>
                </div>
            </div>
            {movie.images? movie.images.map(img => (
                <img src={img} alt="" className="thumbnail-sub"/>
            )) : null}
        </div>
    </section>
    </>);
}

export default Movie;