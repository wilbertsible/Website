import React from 'react';
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/about/resume" component={Resume} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Error} />
    </Switch>
    </>

  );
}

export default App;
