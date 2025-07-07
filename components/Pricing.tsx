import React from "react";

type Plan = {
  title: string;
  price: string;
  frequency?: string;
  features: string[];
  isPopular?: boolean;
};

const tvMountingPlans: Plan[] = [
  {
    title: "Basic Install",
    price: "$50",
    features: [
      'Mount up to 32" TV',
      "Basic wall mount included",
      "Wiring exposed",
    ],
  },
  {
    title: "Standard Install",
    price: "$78",
    
    isPopular: true,
    features: [
      'Mount up to 55" TV',
      "Tilt wall mount included",
      "Wiring concealment (basic)",
      "Device setup assistance",
    ],
  },
  {
    title: "Premium Install",
    price: "$86",
    
    features: [
      'Mount up to 75" TV',
      "Full-motion wall mount included",
      "In-wall cable concealment",
      "Soundbar mount + setup",
    ],
  },
  {
    title: "Elite Install",
    price: "$152",
    
    features: [
      "Any size TV",
      "Custom mount solution",
      "Advanced in-wall concealment",
      "Home theater integration",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-white text-gray-800 body-font overflow-hidden relative">
      {/* Shine effect top right */}
      <div className=" padding-container max-container absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full blur-2xl pointer-events-none z-10"></div>

      <div className="container px-5 py-24 mx-auto relative z-20">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            TV Mounting Service Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Choose a plan that fits your wall and your vision.
          </p>
         
        </div>

        <div className="flex flex-wrap -m-4">
          {tvMountingPlans.map((plan, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div
                className={`h-full p-6 rounded-2xl border backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transition duration-300 ${
                  plan.isPopular ? "border-green-400" : "border-gray-200"
                } relative overflow-hidden`}
              >
                {plan.isPopular && (
                  <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl-lg z-10">
                    POPULAR
                  </span>
                )}

                <h2 className="text-sm tracking-widest title-font mb-1 font-semibold uppercase text-gray-500">
                  {plan.title}
                </h2>
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none flex items-center">
                  <span>{plan.price}</span>
                  {plan.frequency && (
                    <span className="text-lg ml-1 font-normal text-gray-500">{plan.frequency}</span>
                  )}
                </h1>

                {plan.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-600 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-200 text-green-700 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}

                <button
                  className={`flex items-center mt-auto text-white ${
                    plan.isPopular ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 hover:bg-gray-500"
                  } border-0 py-2 px-4 w-full focus:outline-none rounded-lg transition duration-300`}
                >
                  Choose Plan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-400 mt-3">
                  Our team ensures professional installation with every plan.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
