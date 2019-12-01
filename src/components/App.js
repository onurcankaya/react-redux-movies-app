import React from 'react'
import MovieList from './MovieList'

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <MovieList />
        </div>
      </div>
    </div>
  )
}

export default App
