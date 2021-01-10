import React from 'react';

import Typewriter from "typewriter-effect";
import profileImage from "../../assets/John.png"

function About() {
    return (
    <main className="bg-about bg-cover pt-20 pb-20">
      <div className="mx-auto w-10/12 text-center text-white">
        <div className="text-4xl pb-4">
          <h2>Hi, my name is John and I am a...</h2>
          <Typewriter
              options={{
                strings: ["Web Developer", "Researcher", "Student"],
                autoStart: true,
                loop: true,
                delay: 150
              }}
          /> 
        </div>

        <section className="text-center">
          <h2 className="mb-6 text-6xl">About Me</h2>
          <img
            src={profileImage}
            className="object-scale-down mb-5 inline-block rounded-full items-center justify-center..."
            alt="John Park"
          />
          <div className="mb-16 text-2xl">
            <p>
                Hello, my name is John and I am a University of Central Florida graduate with a bachelor's degree in chemistry currently working as a research assistant at Sanofi Pasteur Vaxdesign. Currently I am looking forward to learning the next edge in technology
                which is why I chose to dive into the world of coding and development. Right now I am still a fresh young tadpole diving into this vast ocean of knowledge that many have trekked over the last couple of decades, but I hope that in the
                future I could become a whole new person. One of many who can become one of the pioneers of this technological frontier.
            </p>
          </div>
        </section>
        
      </div>
    </main>
    )
}

export default About