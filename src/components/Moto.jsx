import React from 'react';
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material';

const Moto = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Our Mission & Motto</h1>
          <p className="text-2xl font-semibold text-purple-800">
            Challenge Yourself, Inspire Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-black to-purple-600  rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center">
                  {React.cloneElement(item.icon, { className: "text-white text-3xl" })}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">{item.title}</h3>
              <p className="text-white leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-b from-black to-purple-600 rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Our Mission</h2>
          <p className=" text-lg text-white leading-relaxed">
             <span className=" font-semibold text-white">At LAS Smart School, our mission is to cultivate a nurturing and inclusive environment where every student is empowered to reach their full potential. We are committed to providing a holistic education that fosters academic excellence, critical thinking, creativity, and personal growth. Through a balanced approach to learning, we aim to equip our students with the skills and values necessary to become compassionate, responsible, and successful global citizens.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const mottoItems = [
  {
    title: 'Innovation',
    description: 'We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges.',
    icon: <Lightbulb />,
  },
  {
    title: 'Teamwork',
    description: 'We recognize the importance of teamwork in achieving collective success. Through collaborative projects and extracurricular activities, we foster a collaborative mindset among our students.',
    icon: <Group />,
  },
  {
    title: 'Quality',
    description: 'Quality is at the core of everything we do. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education.',
    icon: <ThumbUp />,
  },
];

export default Moto;