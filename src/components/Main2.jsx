import React from 'react';



function Main2() {
  const downloadBroucher = () => {
    const anchor = document.createElement('a');
    anchor.href = brochu;
    anchor.download = 'broucher.pdf';
    anchor.click();
  };

  return (
<div className='bg-gradient-to-b from-black to-purple-400'>
<div className='container'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:text-light mt-5 flex flex-col justify-center">
            <span className='text-white'></span>
            <h1 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About LAS</h1>
            <p className='text-white text-lg lg:text-xl'>
              
               LAS Smart School is dedicated to providing quality education and holistic development. The school emphasizes academic excellence, critical thinking, and ethical values. It boasts modern infrastructure, including advanced ICT labs, spacious classrooms, Audio Video Hall, mobile and web base student portal systemand Stem Education. LAS aims to empower students with knowledge and skills for a successful future.
            </p>
<button 
className="bg-gradient-to-r from-black to-black hover:to-purple-900 p-2 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 lg:mb-5 text-light transition duration-300"
  onClick={downloadBroucher}
>
  Download Brochure
</button>
          </div>
<div className="lg:mt-0 mt-5 flex justify-center items-center mb-5 lg:mb-0">
  <a href="https://www.wolverhampton.gov.uk/sites/default/files/2023-01/Job%20ref%203-2023%20SDP%20-%20Recruitment%20brochure.pdf" download="broucher.pdf">
    <img src="/assets/pic1.JPG" className='lg:w-full rounded-lg' alt="Brochure" />
  </a>
</div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
