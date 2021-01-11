import React, {useState} from 'react';

import Dainty from "../../assets/project-images/dainty.png";
import ParkTravelApp from "../../assets/project-images/PTA.png";
import BudgetTracker from "../../assets/project-images/BT.png";
import TechBlog from "../../assets/project-images/TB.PNG";
import QuizApp from "../../assets/project-images/QA.png";
import OldPortfolio from "../../assets/project-images/OP.png";


function Portfolio () {
    // NOTE: When you have time put this into seperate JSON File that you can import so that file looks cleaner
    const[projectInfo] = useState([
        {
          name: "Dainty Food App",
          image: Dainty,
          link: "https://dainty-1.herokuapp.com",
          components: "Node.js, Express.js, Sequelize, SQL, MVC",
          github: "https://github.com/aznjp/project-dos",
        },
        {
          name: "Park Travel App",
          image: ParkTravelApp,
          link: "https://aznjp.github.io/park-travel-app/",
          components: "jQuery, Bulma, 3rd-Party API's",
          github: "https://github.com/aznjp/park-travel-app",
        },
        {
          name: "Budget Tracker",
          image: BudgetTracker,
          link: "https://budget-update.herokuapp.com/",
          components: "MongoDB, PWA's, IndexedDB ",
          github: "https://github.com/aznjp/budget-tracker",
        },
        {
          name: "Tech Blog",
          image: TechBlog,
          link: "https://blog-tech-123.herokuapp.com/",
          components: "ORM, Handlebars.js",
          github: "https://github.com/aznjp/techblog",
        },
        {
          name: "Quiz App",
          image: QuizApp,
          link: "https://aznjp.github.io/logicquizgame/",
          components: "DOM-Manipulation, Local-Storage",
          github: "https://github.com/aznjp/logicquizgame",
        },
        {
          name: "Former Portfolio",
          image: OldPortfolio,
          link: "https://aznjp.github.io/John-HTML-CSS-Portfolio/",
          components: "HTML, CSS",
          github: "https://github.com/aznjp/John-HTML-CSS-Portfolio",
        },
    ]);
    return (
        <main className="bg-portfolio bg-cover p-3 md:p-12">
        <section className="container mx-auto">

          <h2 className="flex justify-center text-white text-5xl m-5">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-2 md:p-6 lg:p-8">
            {projectInfo.map((project) => (
              <div key={project.name} className="hover:bg-indigo-500">
                <article>

                  <a href={project.link} target="_blank" rel="noreferrer">
                    <span className="block h-64 relative rounded shadow leading-snug">
                      <img
                        src={project.image}
                        className="w-full h-full rounded absolute"
                        alt="project"
                      />
                      <span className=" block relative h-full flex justify-start items-end pb-1 pl-1 hover:bg-blue-400 hover:bg-opacity-75">
                        <div className="px-3 py-4 bg-blue-600 bg-opacity-75">
                          <h3 className="text-white text-lg font-bold">
                            {project.name}
                          </h3>
                          <p className="text-white ">{project.components}</p>
                        </div>
                      </span>
                    </span>
                  </a>
                  
                </article>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-4xl"
                >
                  <div className="bg-white h-10 items-center text-center">
                    <p className="text-black text-base text-sm">
                      GITHUB REPOSITORY LINK HERE
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
}

export default Portfolio