import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Index from "./Components/Layout/Index";
import Lyrics from "./Components/tracks/Lyrics";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/lyrics/tracks/:id" component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
