// action creator
export const selectMovie = (movieName) => {
  return {
    type: 'SELECT_MOVIE',
    payload: movieName,
  }
}
