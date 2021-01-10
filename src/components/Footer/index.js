import React from 'react';

function Footer() {
    return (
<footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
    <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 uppercase mb-2">Footer header 1</span>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
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