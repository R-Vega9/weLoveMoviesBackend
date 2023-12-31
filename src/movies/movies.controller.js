const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//Controller function to check if movie exists
async function movieExists(req, res, next) {
  const foundMovie = await moviesService.read(req.params.movieId);
  if (foundMovie) {
    res.locals.movie = foundMovie;
    return next();
  }

  return next({
    status: 404,
    message: `Movie does not exist for id: ${req.params.movieId}`,
  });
}


//List function to return list of movies
async function list(req, res, next) {
  const data = await moviesService.list(req.query.is_showing);
  res.json({ data });
}

async function read(req, res, next) {
  res.json({ data: res.locals.movie });
}

//Controller function to get theaters by movie Id
async function theatersByMovieId(req, res, next) {
  const data = await moviesService.listTheatersByMovieId(Number(req.params.movieId));
  res.json({ data });
}

//Controller function to get reviews based of Movie Id
async function reviewsByMovieId(req, res, next) {
  const data = await moviesService.listReviewsByMovieId(Number(req.params.movieId));
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [movieExists, read],
  theatersByMovieId: [movieExists, asyncErrorBoundary(theatersByMovieId)],
  reviewsByMovieId: [movieExists, asyncErrorBoundary(reviewsByMovieId)],
};
