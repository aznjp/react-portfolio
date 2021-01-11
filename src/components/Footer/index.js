import React from 'react';

import { DiGithubAlt, DiStackoverflow} from "react-icons/di"
import { FaLinkedin } from "react-icons/fa";


function Footer() {

return (
    <footer class="footer bg-white relative border-blue-700">
        <div class="container mx-auto px-6">
            <div class="mt-8 text-4xl lg:text-6xl flex flex-row justify-center">
                <a href="https://github.com/aznjp" className="p-4">
                    <DiGithubAlt/>
                </a>
                <a href="https://www.linkedin.com/in/john-park-8a4178176/" className="p-4">
                    <FaLinkedin/>
                </a>
                <a href="https://stackoverflow.com/users/14980701/john-park" className="p-4">
                    <DiStackoverflow/>
                </a>
            </div>
        </div>

        <div class="container mx-auto px-4">
            <div class="mt-8 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-center py-6">
                    <p class="text-sm text-blue-700 font-bold mb-2">
                        © 2020 by John park
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer