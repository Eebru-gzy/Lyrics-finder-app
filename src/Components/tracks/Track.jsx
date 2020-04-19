import React from "react";
import {Link} from 'react-router-dom';

export default function Track({ item }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shad">
        <div className="card-body">
          <h5>{item.artist_name}</h5>
          <p className="card-text">
            <strong><i className="fas fa-play"></i>Track: </strong>{item.track_name}
            <br/>
            <strong><i className="fas fa-compact-disc"></i>Album: </strong>{item.album_name}
          </p>
          <Link to={`lyrics/tracks/${item.track_id}`} className="btn btn-block btn-dark" >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
