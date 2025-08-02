import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="parallax-container min-h-screen relative overflow-hidden">

      {/* Background Image with Blur */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('/assets/back4.JPG')",
          backgroundAttachment: "scroll", 
          filter: "blur(3px)",            
          transform: "scale(1.05)"        
        }}
      ></div>

      {/* Overlay Content */}
      <div className="container-fluid position-absolute z-10 text-light d-flex justify-content-center align-items-center min-h-screen w-full bg-opacity-40">
        <div className="container">
          <div className="w-100 h-100 flex items-center justify-center text-center"> {/* Center content */}
            {/* Text Section */}
            <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                LAS Smart School
              </h1>
              <h1 className="text-3xl mb-4 text-black font-bold" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.6)' }}>
                About Us
              </h1>
              <p className="text-lg leading-relaxed mb-6 font-bold text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>
                At LAS, we are dedicated to fostering an environment of academic excellence, creativity,
                and holistic development. Our state-of-the-art facilities and passionate faculty ensure
                a quality education that empowers students to reach their full potential.
              </p>
              <Link
                to="/events"
                className="btn mt-4 fw-bold rounded-0 bg-purple-600 text-white px-6 py-3 hover:bg-purple-800 transition-all duration-300"
              >
                Explore Our Programs and Events
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
