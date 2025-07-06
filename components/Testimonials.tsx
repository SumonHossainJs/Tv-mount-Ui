import React from "react";

const testimonialsData = [
  {
    name: "Robbert",
    position: "CTO, Robert Consultency",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Jeny Doe",
    position: "CEO, Jeny Consultency",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80",
  },
  {
    name: "Mia Brown",
    position: "Marketing Manager at Stech",
    img: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?auto=format&fit=crop&w=1470&q=80",
    className: "md:hidden lg:block",
  },
  {
    name: "Lead Designer",
    position: "Developer at Stech",
    img: "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
    className: "md:hidden 2xl:block",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      {/* Backgrounds */}
      <div className="bg-white dark:bg-gray-900 md:w-3/5 min-h-screen"></div>
      <div className="bg-blue-500 md:w-2/5 min-h-screen"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-4 py-10 md:w-3/5 md:mx-auto md:my-auto max-w-4xl">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-blue-500">customers</span> <br /> are
          saying
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:mt-16">
          {testimonialsData.map(({ name, position, img, className }, idx) => (
            <div
              key={idx}
              className={`w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 ${
                className ?? ""
              }`}
            >
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea
                tempora dolores qui eius pariatur odit ad voluptas iste, cum
                accusantium beatae tempore quasi nesciunt distinctio. ”
              </p>
              <div className="flex items-center mt-6 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 h-14"
                  src={img}
                  alt={name}
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {name}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows (optional functionality, no handlers attached here) */}
        <div className="hidden mt-12 md:flex items-center space-x-4">
          <button
            title="left arrow"
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            title="right arrow"
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
