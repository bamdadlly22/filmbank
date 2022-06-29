import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getMovie } from "../../services/services";

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
     getMovie(id).then(data => {setMovie(data); console.log(data)}).catch(err => console.log(err));   
    },[])
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
                       <li class="list-group-item"><span>ژانر: </span>{movie.genres}</li>
                       <li class="list-group-item"><span>امتیاز: </span>{movie.imdb_rating}</li>
                       <li class="list-group-item"><span>تعداد رای: </span>{movie.imdb_votes}</li>
                       <li class="list-group-item"><span>کارگردان: </span>{movie.director}</li>
                       <li class="list-group-item"><span>بازیگران: </span>{movie.actors}</li>
                       <li class="list-group-item"><span>کشور: </span>{movie.country}</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2 className="">1994</h2>
                <ul class="list-group list-group-flush">
                       <li class="list-group-item"><span>سال ساخت: </span>{movie.year}</li>
                       <li class="list-group-item"><span>رده سنی: </span>{movie.rated}</li>
                       <li class="list-group-item"><span>تاریخ انتشار: </span>{movie.released}</li>
                       <li class="list-group-item"><span>مدت زمان: </span>{movie.runtime}</li>
                       <li class="list-group-item"><span>امتیاز متا: </span>{movie.metascore}</li>
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