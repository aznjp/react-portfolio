import React from 'react';

function Header(props) {

    return (
        // Add in jumbotron image cover and typewriter react
        // Added in Nav through props.children
    <div className="bg-opacity-60 bg-gradient-to-tr from-blue-800 to-blue-300 h-30">
        {props.children}
    </div>
    )
}

export default Header