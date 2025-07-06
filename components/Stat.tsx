import React from "react";

const StatsSection: React.FC = () => {
  return (
   <section className="text-gray-900 body-font bg-white" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
            Trusted TV Mounting Experts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            We deliver secure, sleek, and professional TV mounting solutions for every home and office. Let us transform your viewing experience with precision and care.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          {[
            { count: "3.5K+", label: "TVs Mounted", icon: MountIcon },
            { count: "98%", label: "Customer Satisfaction", icon: StarIcon },
            { count: "32\"–85\"+", label: "TV Sizes Supported", icon: TvIcon },
            { count: "50+", label: "Cities Served", icon: LocationIcon },
          ].map((stat, idx) => (
            <div key={idx} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="items bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-xl shadow-lg">
                <stat.icon />
                <h2 className="title-font font-medium text-3xl text-gray-900 mt-2">
                  {stat.count}
                </h2>
                <p className="leading-relaxed text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Icon: TV Mount
const MountIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="text-green-400 w-12 h-12 mb-3 inline-block"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
    <path d="M8 20h8M12 18v2" />
  </svg>
);

// Icon: Star (Customer Satisfaction)
const StarIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="text-yellow-400 w-12 h-12 mb-3 inline-block"
    viewBox="0 0 24 24"
  >
    <path d="M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.1-.6L12 2 9.1 8.7 2 9.3l5.4 4.7-1.6 7z" />
  </svg>
);

// Icon: TV
const TvIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="text-blue-400 w-12 h-12 mb-3 inline-block"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8M12 19v2" />
  </svg>
);

// Icon: Location
const LocationIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="text-pink-400 w-12 h-12 mb-3 inline-block"
    viewBox="0 0 24 24"
  >
    <path d="M12 21s8-6.5 8-11a8 8 0 1 0 -16 0c0 4.5 8 11 8 11z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default StatsSection;
