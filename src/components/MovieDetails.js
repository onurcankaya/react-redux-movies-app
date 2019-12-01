import React from 'react'
import { connect } from 'react-redux'

function MovieDetails({ selectedMovie }) {
  if (!selectedMovie) {
    return <div>Select a movie!</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <div>Title: {selectedMovie.title}</div>
      <div>Duration: {selectedMovie.duration}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(MovieDetails)
