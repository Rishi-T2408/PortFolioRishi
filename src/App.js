import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Contact from "../src/pages/Contact";

import NavMenu from './components/NavMenu'

import HeroSection from "./components/HeroSection";

import Projects from '../src/pages/Projects'
import Footer from "./components/Footer";
import About from "./pages/About";

import SmoothScrollbar from "./components/SmoothScrollbar";

 
function App() {
  return (
    <>
    <Router>

      <NavMenu />
      <SmoothScrollbar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <HeroSection />
        </Route>
      </Switch>
      <Footer />

      
      </SmoothScrollbar>
    </Router>
  </>
  );
}                      

export default App;
