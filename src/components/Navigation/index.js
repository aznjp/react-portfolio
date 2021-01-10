import React, {useEffect} from 'react';

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

  /* Added in hook to allow for the changes to be visible to user once they click on DIFFERENT tabs*/
  useEffect(() => {
      console.log('Congrats you learned how to switch between the tabs!')
      document.title = currentTab
  }, [currentTab]);

  return (
      <nav className ="flex flex-wrap items-center justify-center lg:justify-between w-full h-36 text-white text-4xl">
        <div className="flex items-center text-white mr-0">
          <a className="focus:outline-none text-4xl flex justify-center pl-7"href="/">
              John Park
          </a>
        </div>



        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block">
          <ul className = "flex justify-center lg:justify-end flex-1 items-center text-lg xl:text-2xl">
            {tabs.map((tabs) => (
              <li className= {`pl-4 pr-4 cursor-pointer ${currentTab === tabs && 'navActive text-purple-300'}`} key={tabs} >
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