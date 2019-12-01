import React from 'react'
import { connect } from 'react-redux'
import { selectMovie } from '../actions'

class MovieList extends React.PureComponent {
  onSelectMovie = (movie) => {
    this.props.selectMovie(movie)
  }

  render() {
    const { movies } = this.props

    return (
      <div className="ui divided list">
        {movies &&
          movies.map((movie, index) => (
            <div className="item" key={index}>
              <div>
                <div className="right floated content">
                  <button
                    onClick={() => this.onSelectMovie(movie)}
                    className="ui button primary">
                    Select
                  </button>
                </div>
                <div className="content">{movie.title}</div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps, { selectMovie })(MovieList)
