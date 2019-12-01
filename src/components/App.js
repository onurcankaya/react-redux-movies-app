import React from 'react'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <MovieList />
        </div>
        <div className="column eight wide">
          <MovieDetails />
        </div>
      </div>
    </div>
  )
}

export default App
