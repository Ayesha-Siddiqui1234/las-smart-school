import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg   d-flex justify-content-center align-items-center  bg-center bg-no-repeat "
                style={{
                    backgroundImage: "url('src/assets/cam.jpg')",
                }}
            ></div>
            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25 ">
                <div className=' container '>
                    <div className='w-100 h-100 grid  grid-cols-1 lg:grid-cols-2 '>

                    <div className=" flex flex-col   justify-center">


                        <h1 className='fw-bold text-2xl lg:text-4xl  mb-4'>LAS Smart School</h1>
                        <p className='text-lg lg:text-2xl '>  LAS Smart School offers a rich and diverse educational experience that goes beyond the classroom. Our mission is to provide high-quality education through effective management , rigorous training , and exceptional taeching, benefiting both students and community

                        </p>
                        <span>

                        <Link to="/college" className='btn shadow-lg  mt-5 fw-bold rounded-0 bg-purple-600 text-white'>Go Explore <ArrowRightAltIcon /> </Link>
                        </span>
                    </div>

                    <div className="hidden lg:flex justify-center">

                        <img src="src/assets/pic2.JPG" alt="" className='shadow-lg  rounded-4 w-[700px] h-[400px]' />

                    </div>
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Main3
