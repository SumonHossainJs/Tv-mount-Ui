import React from "react";
import { FaPlay } from "react-icons/fa";

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1593784991251-92ded75ea290?w=500&auto=format&fit=crop&q=60",
  
];



const VideoG: React.FC = () => {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">Video Highlights</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Watch our professional TV mounting in action — from seamless installations to happy customer testimonials.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["All", "Installation", "Customer Review", "Demo"].map((label) => (
          <button
            key={label}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="relative group break-inside-avoid overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-auto object-cover transition-all duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <FaPlay className="text-white text-xl sm:text-2xl md:text-3xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default VideoG;
