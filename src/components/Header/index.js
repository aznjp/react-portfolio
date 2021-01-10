import React from 'react';

import Typewriter from "typewriter-effect";


const Header = () => {

    return (
        // Add in jumbotron image cover and typewriter react
    <div>

        <Typewriter
            options={{
                strings: ["Web Developer", "Researcher", "Student"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
        /> 
    </div>
    )
}

export default Header