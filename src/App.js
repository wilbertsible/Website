import React from 'react';
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Resume" component={Resume} />
      <Route exact path="/Blogs" component={Blogs} />
      <Route exact path="/Contact" component={Contact} />
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
