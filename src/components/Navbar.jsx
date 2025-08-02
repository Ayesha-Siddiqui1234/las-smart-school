import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-[100vw]'>

      <div className='container-fluid '>
        <div className="row hidden lg:flex lg:items-center lg:justify-between p-3 text-white bg-gradient-to-br from-purple-800 to-black">
          <div className="col-6 d-flex items-center">
            <h5 className='fw-bold'>LAS Smart School</h5>
          </div>
        </div>

        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light">
          <div className="container-fluid bg-gradient-to-br from-black to-purple-400">
            <span className='navbar-brand flex items-center'>
              <img src="src/assets/IMG-20250714-WA0008-removebg-preview.png" alt="" className='navbar-brand rounded-full object-fill w-[50px] lg:w-[80px]' />
              <span className='lg:hidden block text-sm'>LAS Smart School</span>
            </span>

            <div className="flex " id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-center gap-2 ">
                {[
                  { label: "HOME", path: "/" },
                  { label: "ABOUT", path: "/aboutus" },
                  { label: "FACULTY", path: "/faculty" },
                  { label: "STUDENTS", path: "/students" },
                  { label: "EVENTS", path: "/events" },
                  { label: "ACADEMICS", path: "/curriculum" },
                  { label: "MISSION", path: "/moto" },
                  { label: "GLIMPSE", path: "/campus" },
                ].map(({ label, path }, i) => (
                  <Link to={path} key={i} className="nav-item">
                    <a className="nav-link text-white hover:text-purple-700 transition-all duration-300 hover:underline underline-offset-4 font-medium">
                      {label}
                    </a>
                  </Link>
                ))}

                <li className="nav-item me-3">
                  <Link to="/contact">
                    <button className="btn bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-300 rounded-full">
                      Admission
                    </button>
                  </Link>
                </li>
              </ul>

              {/* Mobile Menu Icon */}
              <div className='d-lg-none d-block'>
                <Menu className='fw-bold fs-1 cursor-pointer' onClick={() => setIsOpen(true)} />
              </div>

              {/* Mobile Sidebar */}
              <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className="cursor-pointer text-2xl mb-4" onClick={toggleMenu}>
                  &times;
                </div>
                <ul className="mt-8 space-y-4 flex flex-col gap-3">
                  {[
                    { label: "HOME", path: "/" },
                    { label: "ABOUT", path: "/aboutus" },
                    { label: "FACULTY", path: "/faculty" },
                    { label: "STUDENTS", path: "/students" },
                    { label: "EVENTS", path: "/events" },
                    { label: "ACADEMICS", path: "/curriculum" },
                    { label: "MISSION", path: "/moto" },
                    { label: "GLIMPSE", path: "/campus" },
                  ].map(({ label, path }, i) => (
                    <Link to={path} key={i}>
                      <a className="text-white hover:text-purple-300 transition-all duration-200">{label}</a>
                    </Link>
                  ))}

                  <li>
                    <Link to="/contact">
                      <button className="btn bg-purple-600 hover:bg-purple-800 text-white w-full mt-2 rounded shadow-lg font-semibold transition-all duration-300">
                        CONTACT US
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
