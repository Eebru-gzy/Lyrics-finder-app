import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Index from "./Components/Layout/Index";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
