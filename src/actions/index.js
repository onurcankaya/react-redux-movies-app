// action creator
export const selectMovie = (movie) => {
  return {
    type: 'SELECT_MOVIE',
    payload: movie,
  }
}
