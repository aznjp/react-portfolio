import React from 'react';

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
      <nav>
        <ul>
          {tabs.map((tabs) => (
            <li className= {`${currentTab === tabs && 'navActive'}`} key={tabs} >
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
      </nav>
  );
}

export default Navigation