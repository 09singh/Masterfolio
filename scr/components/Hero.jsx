import React from 'react';
import Profile from '../assets/profile.png';
import Profile1 from '../assets/profile1.png';
export default function Hero() {
  return (
    <section id="home" className="py-32 bg-gradient-to-br from-brown-100 to-brown-50">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-6xl font-bold leading-tight text-black">
              Creative Developer & <span className="text-brown-400">Problem Solver</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-brown-700">
              Building elegant digital experiences with modern technologies. Specializing in web development and creative design.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button 
                className="px-8 py-3 bg-brown-400 text-white rounded font-semibold hover:bg-brown-600 transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
              <button 
                className="px-8 py-3 font-semibold transition-all duration-300 bg-transparent border-2 rounded text-brown-400 border-brown-400 hover:bg-brown-400 hover:text-white"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center rounded-full h-96 bg-brown-100">
            <img src={Profile} alt="Profile" className="h-full border-4 rounded-full  border-brown-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
