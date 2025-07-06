"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What does the TV mounting service include?",
    answer:
      "Our service includes mounting your TV securely on the wall, concealing cables (depending on the plan), and optimizing the viewing angle.",
  },
  {
    question: "Do I need to provide the wall mount?",
    answer:
      "No, we provide the appropriate wall mount depending on the plan you choose. You can also request custom mount types.",
  },
  {
    question: "Can I book same-day installation?",
    answer:
      "Yes, same-day service is available in select areas based on technician availability. Please contact us directly.",
  },
  {
    question: "What TVs do you support?",
    answer:
      "We support all major TV brands and sizes, including curved, OLED, QLED, and 4K/8K TVs.",
  },
  {
    question: "Do you conceal cables inside the wall?",
    answer:
      "Yes, in-wall cable concealment is available as an optional add-on. We'll check wall type compatibility before proceeding.",
  },
  {
    question: "Can you mount on brick or concrete walls?",
    answer:
      "Absolutely! Our technicians are equipped to mount TVs on drywall, brick, concrete, and even tile surfaces.",
  },
  {
    question: "Will you help set up my soundbar or streaming device?",
    answer:
      "Yes, we can mount soundbars and help connect devices like Apple TV, Roku, or Fire Stick as part of the setup.",
  },
  {
    question: "How long does the installation take?",
    answer:
      "Most installations take 45 to 90 minutes depending on the complexity and mount type. We'll let you know if more time is needed.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half);

  return (
    <section className="px-4 py-16 mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[firstHalf, secondHalf].map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            {group.map((faq, index) => {
              const realIndex =
                groupIndex === 0 ? index : index + firstHalf.length;
              return (
                <div
                  key={realIndex}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(realIndex)}
                    className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-medium hover:bg-gray-5 transition"
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown
                      className={`text-xl transform transition-transform duration-300 ${
                        openIndex === realIndex
                          ? "rotate-180 text-indigo-500"
                          : ""
                      }`}
                    />
                  </button>
                  {openIndex === realIndex && (
                    <div className="px-5 pb-5 text-gray-600 transition-all duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
