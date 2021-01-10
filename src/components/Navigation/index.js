import React from 'react';

// import logo from "../../logo.svg";
import "../../App.css";
import "../../index.css";

function Navigation(props) {
  /* Passed in props through functional component to enable change of tab through 
  mapping function and getter and setter functions will keep track of current Tab 
  and setting the new Tab thereafter*/
  const {
        tabs = [],
        currentTab,
        setCurrentTab
    } = props;

  return (
      <nav className ="flex items-center justify-center lg:justify-between flex-wrap w-full h-36 text-white text-4xl">
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block">
          <ul className = "flex justify-center lg:justify-end flex-1 items-center text-2xl xl:text-2xl">
            {tabs.map((tabs) => (
              <li className= {`pl-4 pr-4 ${currentTab === tabs && 'navActive'}`} key={tabs} >
              <span
                  onClick={() => {
                  setCurrentTab(tabs)
                  }}
              >
              {tabs}
              </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
}

export default Navigation