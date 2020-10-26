import React from 'react';
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
/*import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";*/
import Error from "./pages/Error";
import UnderConstruction from "./pages/UnderConstruction";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/About/Resume" component={Resume} />
      {/* <Route exact path="/Blogs" component={UnderConstruction} />
      <Route exact path="/Projects" component={UnderConstruction} />
      <Route exact path="/Contact" component={UnderConstruction} /> */}
      <Route component={Error} />
    </Switch>
    </>

  );
}

export default App;
