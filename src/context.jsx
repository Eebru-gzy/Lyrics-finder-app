import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  if(action.type === 'SEARCH_TRACKS') {
    return {...state, track_list: action.payload, heading: 'Search Results'}
  } else return state;
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Songs",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=ng&f_has_lyrics=1&apikey=cfc2031ae2f008d8aeefa9039947c553`
      )
      .then((res) => {
        // console.log(res.data)
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children};
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
