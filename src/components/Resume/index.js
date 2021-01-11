import React from 'react';
import resume from './JohnResume.pdf'

import { DiHtml5, DiDatabase, DiCss3, DiNodejsSmall, DiJsBadge, DiMongodb, DiReact, DiBootstrap } from "react-icons/di";

function Resume() {
    return (
    <div className = "bg-resume bg-cover">
        <div className="text-center pt-20">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <a href={resume} target="blank">
                <svg class="fill-current w-4 h-4 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download my resume</span>
                </a>
            </button>
        </div>
        <div className="pt-10">
            <div className="text-center justify-center grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-blue-400 opacity-80 text-white place-self-center w-80 pb-8">
                    <h2 className="text-3xl lg:text-5xl pt-6 pb-8">FRONT END</h2>
                    <ul>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://developer.mozilla.org/en-US/docs/Web/HTML" className="flex justify-center">
                                <DiHtml5/> 
                                <span> HTML5 </span>
                            </a>
                        </li>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://developer.mozilla.org/en-US/docs/Web/CSS" className="flex justify-center">
                                <DiCss3/> 
                                <span>CSS</span>
                            </a>
                        </li>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="flex justify-center">
                                <DiJsBadge/> 
                                <span>JavaScript</span>
                            </a>
                        </li>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://bootstrapdocs.com/v3.3.6/docs/" className="flex justify-center">
                                <DiBootstrap/> 
                                <span>Bootstrap</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-400 opacity-80 text-white place-self-center w-80 pb-8">
                    <h2 className="text-3xl lg:text-5xl pt-6 pb-8">BACK END</h2>
                    <ul>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://nodejs.org/en/docs/" className="flex justify-center">
                                <DiNodejsSmall/> 
                                <span>NodeJS and Express</span>
                            </a>
                        </li>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://reactjs.org/docs/getting-started.html" className="flex justify-center">
                                <DiReact/> 
                                <span>React</span>
                            </a>
                        </li>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://dev.mysql.com/doc/" className="flex justify-center">
                                <DiDatabase/> 
                                <span>SQL</span>
                            </a>
                        </li>
                        <li className="text-xl lg:text-3xl pb-3">
                            <a href ="https://docs.mongodb.com/manual/" className="flex justify-center">
                                <DiMongodb /> 
                                <span>MongoDB</span>
                            </a>
                        </li>
                    </ul> 
                </div>

            </div>
        </div>

        <div className="text-center bg-blue-400 opacity-80 text-white mt-10 pb-10">
            <h2 className="text-3xl lg:text-5xl pt-6 pb-8">Other Proficiencies</h2>
            <ul className="text-xl lg:text-3xl pb-3">
                <li>
                    MVC (Model View Controller) Design
                </li>
                <li>
                    Object-Oriented Programing
                </li>
                <li>
                    Template Engines (ex. Handlebars.js)
                </li>
                <li>
                    PWA (Progressive Web Applications)
                </li>
                <li>
                    REST (Representational State Transfer) API's
                </li>

            </ul>
        </div>
    </div>
    )
}

export default Resume