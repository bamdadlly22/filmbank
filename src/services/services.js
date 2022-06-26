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
