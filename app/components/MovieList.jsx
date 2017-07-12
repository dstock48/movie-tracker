import React, { Component } from 'react';

class MovieList extends Component {
  constructor() {
    super()
  }

  fetchMovies() {
    this.props.getMovieData('fetchURL');
  }

  render() {
    return (
      <section>
        THIS IS THE MovieList COMPONENT
        <button
          className="sampleBtn"
          onClick={this.fetchMovies.bind(this)}
        >CLICK ME!</button>
      </section>
    )
  }
}

export default MovieList;
