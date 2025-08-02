import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white-300">
      <h1 className="text-5xl font-bold text-center mb-16 text-purple-900">Student Life at LAS</h1>

     
      <section className="mb-20 bg-black rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Extracurricular Activities</h2>
        <p className="text-xl text- text-center mb-8 text-white">
          Our students engage in a variety of extracurricular activities including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Annual check-up', 'orange day','winter day','annual day'].map((activity, index) => (
            <div key={index} className="bg-purple-600 rounded-lg p-4 text-center">
              <span className="text-lg font-medium text-white">{activity}</span>
            </div>
          ))}
        </div>
      </section>

 
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Shining Stars of LAS</h2>

  <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
    {[
      { name: 'ALI ANWAR', percentage: '90%', position: '1st', color: 'bg-purple-700' },
      { name: 'NOOR FATIMA', percentage: '89%', position: '2nd', color: 'bg-purple-500' },
      { name: 'IRSA BI', percentage: '89%', position: '3rd', color: 'bg-purple-400' },
    ].map((student, index) => (
      <div
        key={index}
        className={`text-white ${student.color} p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 w-64 text-center`}
      >
        <h3 className="text-2xl font-extrabold mb-2">{student.name}</h3>
        <p className="text-xl mb-2">{student.percentage} Marks</p>
        <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm">
          {student.position} Position
        </span>
      </div>
    ))}
  </div>
</section>

        </div>
  );
}

export default Students;