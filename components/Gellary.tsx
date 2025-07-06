import React from "react";

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHZ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHZ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHZ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHR2fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHR2fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR2fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHR2fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1593784991251-92ded75ea290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHR2fGVufDB8fDB8fHww",
];

const PinterestGallery: React.FC = () => {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">Our Mounting Work</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore our TV mounting gallery showcasing fixed, tilt, and
          full-motion installations across a variety of wall types and room
          styles.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["All", "Fixed", "Tilt", "Full Motion"].map((label) => (
          <button
            key={label}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i}`}
            className="w-full rounded-lg hover:opacity-90 transition-all duration-300 break-inside-avoid"
          />
        ))}
      </div>
    </section>
  );
};

export default PinterestGallery;
