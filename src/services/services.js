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

export const RegisterUser = async (user) => {
  const response = await fetch("https://moviesapi.ir/api/v1/register",{
    method:"POST",
    mode: 'cors',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(user)
  });
  if(response.ok) {
    return response.json();
  } else {
      throw Error(response.err);
  }
}





export const loginUser = async (formdata) => {
  const token = localStorage.getItem("token");
  // if (token) {var auth = `Bearer ${token}`;}
  const response = await fetch("https://moviesapi.ir/oauth/token",{
    method:"POST",
    headers:{
      "Authorization": localStorage.getItem("token") ? ('Bearer ' + `Bearer ${token}`) : null},
    body:formdata,
  })
  if(response.ok) {
    return response.json();
  } else {
      throw new Error(response.err);
  }
}