import React from 'react'
import { connect } from 'react-redux'

class MovieList extends React.PureComponent {
  render() {
    const { movies } = this.props

    return (
      <div className="ui divided list">
        {movies &&
          movies.map((movie, index) => (
            <div className="item" key={index}>
              <div className="right floated content">
                <button className="ui button primary">Select</button>
              </div>
              <div className="content">{movie.title}</div>
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

export default connect(mapStateToProps)(MovieList)
