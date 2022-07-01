export const getMovies = async () => {
  const response = await fetch("https://moviesapi.ir/api/v1/movies", {
    method: "GET",
  });
  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.err);
  }
};

export const getMovie = async (id) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    method:"GET",
  });
  if(response.ok) {
    return response.json();
  } else {
      throw Error(response.err);
  }
}

export const searchMovies = async (movieName) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies?q=${movieName}`,{method:"GET"});
  if(response.ok) {
    return response.json();
  } else {
      throw Error(response.err);
  }
} 

export const paginateMovies = async (moviePage) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies?page=${moviePage}`,{method:"GET"});
  if(response.ok) {
    return response.json();
  } else {
      throw Error(response.err);
  }
} 

