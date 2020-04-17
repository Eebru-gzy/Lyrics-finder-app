import React from "react";
import Tracks from "../tracks/Tracks";




const Index = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <div className="card-title text-center">
            <span className="h1">Search For A Song</span>
            <p className="mt-2 h6">Get the lyrics for any song</p>
          </div>
          <form className="form">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Song title..."
              />
            </div>
            <button className="btn btn-primary h6 btn-block">
              Get Track Lyrics
            </button>
          </form>
        </div>
      </div>
      <Tracks />
    </React.Fragment>
  );
}
 
export default Index;

