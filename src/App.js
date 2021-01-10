import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Header from "./components/Header";
import Navigation from './components/Navigation';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './App.css';

function App() {
  
  const [tabs] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])
  // This is to set the setter and getters for once when the selected state is clicked (initial state is the About Me)
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (

    <div>
      <Header />
      {/* Utilized these from lesson module to switch amongst the different components and conditionally render them in 
      the div below when selected through each state above*/}
      <Navigation
        tabs = {tabs}
        currentTab = {currentTab}
        setCurrentTab = {setCurrentTab}
      />
      {/* Conditional Rendering is utilized to switch between the different components based on clicking the button */}
      <div>
        {currentTab === "About Me" ? (
          <About />
        ) : currentTab === "Portfolio" ? (
          <Portfolio />
        ) : currentTab === "Contact" ? (
          <Contact />
        ) : currentTab === "Resume" ? (
          <Resume />
        )  : (
          <About />
        )}
      </div>

      <Footer />
    </div>

  );
}

export default App;
