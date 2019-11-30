import React from 'react'
import { connect } from 'react-redux'

class MovieList extends React.PureComponent {
  render() {
    const { movies } = this.props

    return (
      <div>
        {movies &&
          movies.map((movie, index) => <div key={index}>{movie.title}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps)(MovieList)
