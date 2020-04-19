import React, { Component } from "react";
import Axios from "axios";
import { Consumer } from "../../context";

export default class Search extends Component {
  state = {
    trackTitle: "",
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=cfc2031ae2f008d8aeefa9039947c553`
    )
      .then((res) => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list,
        })
        this.setState({trackTitle: ''})
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-4 p-3">
              <div className="card-body">
                <div className="card-title text-center">
                  <span className="h1">
                    {" "}
                    <i className="fas fa-music"></i> Search For A Song
                  </span>
                  <p className="mt-2 lead">Get the lyrics for any song</p>
                </div>
                <form
                  onSubmit={this.findTrack.bind(this, dispatch)}
                  className="form"
                >
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      id="name"
                      placeholder="Song title..."
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Get Track Lyrics
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
