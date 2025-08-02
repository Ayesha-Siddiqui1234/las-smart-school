import React, { useState } from 'react';

const eventsData = [
  {
    category: "Primary Events",
    events: [
      {
        title: "winter day",
        date: "2024-08-15",
        description: "A crisp winter day, where every breath feels like magic in the frosty air!",
        image: "src/assets/winterday.JPG"      


      },
      {
        title: "orange day",
        date: "2024-09-10",
        description: "Students lit up the campus in shades of orange, celebrating joy, creativity, and energy!",
        image:"src/assets/orangeday1.JPG"
      },
      {
        title: "Science and Arts Exhibition",
        date: "2024-10-05",
        description: "A week showcase their arts and talent and their creativity in science and arts.",
      image:"src/assets/DSC_0839.JPG"
      }
    ]
  },
  {
    category: "Secondary Events",
    events: [
      {
        title: "Sports day",
        date: "2024-11-20",
        description: "A week dedicated to various physical activities and sports to promote health and fitness among students.",
        image:"src/assets/sp.jpg"
      },
      {
        title: "Computer Science Quiz",
        date: "2024-12-15",
        description: "A quiz competition focused on computer science topics, including programming, algorithms, and tech trivia.",
        image:"src/assets/comp.jpg"
      },
      {
        title: "Social Studies Debate",
        date: "2025-01-10",
        description: "A debate competition where students discuss and argue on various social studies topics, enhancing their public speaking and critical thinking skills.",
        image:"src/assets/debate.jpg"
      }
    ]
  },
  {
    category: "Annual Events",
    events: [
      {
        title: "Science Olympiad",
        date: "2025-02-25",
        description: "An advanced competition science olympiad covering physics chemistry and biological aspects and pushed students to show their talent.",
        image:"src/assets/pic2.JPG"
      },
      {
        title: "Parants Teacher Meeting",
        date: "2025-03-15",
        description: "A meeting where parents and teachers discuss students' progress, challenges, and achievements.",
        image:"src/assets/ptm.jpg"

      },
      {
        title: "Graduation Ceremony",
        date: "2025-04-20",
        description: "A ceremony in which students are awarded with shields and medals on their remarkable achievements.",
        image: "src/assets/graduation.JPG"
      }
    ]
  }
];
const Events = () => {
  const [activeCategory, setActiveCategory] = useState('Primary Events');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderEvents = () => {
    const categoryData = eventsData.find((data) => data.category === activeCategory);
    return categoryData ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.events.map((event, index) => (
          <div key={index} className="bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
{event.image && (
  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
)}
<div className="p-6">
  <h4 className="text-xl font-bold mb-2 text-purple-600">{event.title}</h4>
  <p className="text-white mb-3 text-sm">
    {new Date(event.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  </p>
  <p className="text-white">{event.description}</p>
</div>
            
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No events found for this category.</p>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-purple-400">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">Upcoming Events</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {eventsData.map((data, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === data.category 
                ? 'bg-purple-700 text-white font-bold shadow-lg' 
                : 'bg-white text-purple-700 hover:bg-indigo-100'
            }`}
            onClick={() => handleCategoryClick(data.category)}
          >
            {data.category}
          </button>
        ))}
      </div>
      {renderEvents()}
    </div>
  );
};
export default Events;
