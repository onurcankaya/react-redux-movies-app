import { combineReducers } from 'redux'

const moviesReducer = () => {
  return [
    {
      title: 'Interstellar',
      duration: '2h 49m',
    },
    {
      title: 'Dunkirk',
      duration: '1h 46m',
    },
    {
      title: 'The Matrix',
      duration: '2h 16m',
    },
    {
      title: 'Fight Club',
      duration: '2h 31m',
    },
  ]
}

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === 'SELECT_MOVIE') {
    return action.payload
  }

  return selectedMovie
}

const reducers = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
})

export default reducers
