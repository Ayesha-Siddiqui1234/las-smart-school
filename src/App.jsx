// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { KeyboardArrowUp } from '@mui/icons-material';

// import Coursoul from './components/Coursoul';
// import Main1 from './components/Main1';
// import Main2 from './components/Main2';
// import Marquee from './components/Marquee';
// import Navbar from './components/Navbar';
// import Checkout from './components/Checkout';
// import Main3 from './components/Main3';
// import Footer from './components/Footer';
// import About from './components/Faculty';
// import Moto from './components/Moto';
// import Campus from './components/Campus';
// import College from './components/About';
// import Contact from './components/Contact';
// import Timer from './components/Timer';
// import Events from './components/Events';
// import Curriculum from './components/Curriculum';
// import Faculty from './components/Faculty';
// import Students from './components/Students';

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   const toggleVisibility = () => {
//     setIsVisible(window.scrollY > 300);
//   };

//   return (
//     <Router>
//       <div className='bg-gray-100'>
//         <Navbar />
//         <Routes>
//           <Route
//             exact
//             path='/'
//             element={
//               <div>
//                 <Coursoul />
//                 <Marquee text={`"Welcome to LAS Smart School, where we nurture young minds for a brighter future."`} />
//                 <Timer />
//                 <Marquee text={`"Join us for graduation ceremony where you can see the achievements of our shining stars."`} />
//                 <Main2 />
//                 <Checkout />
//                 <Main1 />
//                 <Main3 />
//               </div>
//             }
//           />

//           <Route
//             exact
//             path='/faculty'
//             element={
//               <>
//                 <Faculty />
//                 <Main2 />
//                 <Checkout />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/students'
//             element={
//               <>
//                 <Students />
//                 <Main2 />
//                 <Checkout />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/campus'
//             element={
//               <>
//                 <Campus />
//                 <Main2 />
//                 <Checkout />
//                 <Main1 />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/events'
//             element={
//               <>
//                 <Events />
//                 <Main2 />
//                 <Checkout />
//                 <Main1 />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/curriculum'
//             element={
//               <>
//                 <Curriculum />
//                 <Main2 />
//                 <Checkout />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/moto'
//             element={
//               <>
//                 <Moto />
//                 <Main2 />
//                 <Checkout />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/aboutus'
//             element={
//               <>
//                 <College />
//                 <Main2 />
//                 <Checkout />
//                 <Main1 />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route
//             exact
//             path='/contact'
//             element={
//               <>
//                 <Contact />
//                 <Main2 />
//                 <Checkout />
//                 <Main3 />
//               </>
//             }
//           />

//           <Route path='*' element={<Navigate to="/" />} />
//         </Routes>

//         {isVisible && (
//           <button
//             className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             <KeyboardArrowUp />
//           </button>
//         )}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp, Chat } from '@mui/icons-material';

import Coursoul from './components/Coursoul';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import Main3 from './components/Main3';
import Footer from './components/Footer';
import Moto from './components/Moto';
import Campus from './components/Campus';
import College from './components/About';
import Contact from './components/Contact';
import Timer from './components/Timer';
import Events from './components/Events';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Students from './components/Students';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false); // chatbot toggle state

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  return (
    <Router>
      <div className='bg-gray-100'>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <Coursoul />
                <Marquee text={`"Welcome to LAS Smart School, where we nurture young minds for a brighter future."`} />
                <Timer />
                <Marquee text={`"Join us for graduation ceremony where you can see the achievements of our shining stars."`} />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </div>
            }
          />

          <Route
            exact
            path='/faculty'
            element={
              <>
                <Faculty />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/students'
            element={
              <>
                <Students />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/campus'
            element={
              <>
                <Campus />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/events'
            element={
              <>
                <Events />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/curriculum'
            element={
              <>
                <Curriculum />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/moto'
            element={
              <>
                <Moto />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/aboutus'
            element={
              <>
                <College />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/contact'
            element={
              <>
                <Contact />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

        {isVisible && (
          <button
            className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KeyboardArrowUp />
          </button>
        )}

        {/* Chatbot toggle button */}
        <button
          className="fixed bottom-20 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <Chat />
        </button>

        {/* Chatbot iframe */}
        {chatOpen && (
          <div
            style={{
              position: 'fixed',
              bottom: '80px',
              right: '20px',
              width: '320px',
              height: '400px',
              zIndex: 1000,
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#fff'
            }}
          >
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/aY7UFB9Ii0F2ALzhg1ZQy"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Chatbot"
            ></iframe>
          </div>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;







