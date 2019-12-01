import React from 'react'
import { connect } from 'react-redux'

function MovieDetails({ selectedMovie }) {
  return (
    <div>
      <div>Details for:</div>
      <div>{selectedMovie && selectedMovie.title}</div>
      <div>{selectedMovie && selectedMovie.duration}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(MovieDetails)
