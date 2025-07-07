"use client";

import React, { useState } from "react";

type QuestionType = "text" | "single-choice" | "multi-choice" | "grouped-inputs";

interface Question {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[];
}

const questions: Question[] = [
  {
    id: "mountType",
    question: "What type of TV mount do you need?",
    type: "multi-choice",
    options: ["Fixed", "Tilting", "Full-Motion", "Ceiling Mount"],
  },
  {
    id: "tvSize",
    question: "What is your TV size?",
    type: "single-choice",
    options: ["32-43 inch", "44-55 inch", "56-65 inch", "66+ inch"],
  },
  {
    id: "wallType",
    question: "What type of wall will the TV be mounted on?",
    type: "single-choice",
    options: ["Drywall", "Brick", "Concrete", "Wood Panel"],
  },
  {
    id: "concealWires",
    question: "Do you want wire concealment?",
    type: "single-choice",
    options: ["Yes, in-wall", "Yes, external cover", "No", "Not sure"],
  },
  {
    id: "comments",
    question: "Any additional comments?",
    type: "text",
  },
  {
    id: "userDetails",
    question: "Please provide your contact information",
    type: "grouped-inputs",
  },
];

const Questionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({
    name: "",
    address: "",
    phone: "",
  });

  const currentQuestion = questions[currentStep];
  const totalQuestions = questions.length;
  const progress = ((currentStep + 1) / totalQuestions) * 100;

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAnswers({ ...answers, [currentQuestion.id]: e.target.value });
  };

  const handleGroupedChange = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleSingleChoice = (option: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: option });
  };

  const handleMultiChoice = (option: string) => {
    const prevAnswers = (answers[currentQuestion.id] as string[]) || [];
    const updatedAnswers = prevAnswers.includes(option)
      ? prevAnswers.filter((o) => o !== option)
      : [...prevAnswers, option];

    setAnswers({ ...answers, [currentQuestion.id]: updatedAnswers });
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
    alert("Thank you! We'll contact you soon.");
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "text":
        return (
          <textarea
            value={answers[currentQuestion.id] || ""}
            onChange={handleTextChange}
            placeholder="Your answer..."
            className="w-full p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        );
      case "single-choice":
        return (
          <div className="space-y-2">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleSingleChoice(option)}
                className={`w-full p-3 rounded-lg border text-left ${
                  answers[currentQuestion.id] === option
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-white/10 text-white hover:bg-emerald-600/20"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case "multi-choice":
        const selectedOptions = (answers[currentQuestion.id] as string[]) || [];
        return (
          <div className="space-y-2">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleMultiChoice(option)}
                className={`w-full p-3 rounded-lg border text-left ${
                  selectedOptions.includes(option)
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-white/10 text-white hover:bg-emerald-600/20"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case "grouped-inputs":
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={answers.name || ""}
              onChange={(e) => handleGroupedChange("name", e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="text"
              placeholder="Your address"
              value={answers.address || ""}
              onChange={(e) => handleGroupedChange("address", e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={answers.phone || ""}
              onChange={(e) => handleGroupedChange("phone", e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url('/tv-mount-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-xl w-full px-8 py-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-emerald-300/30 ring-1 ring-white/10 text-white">
        <div className="w-full bg-white/20 rounded-full h-3 mb-6 overflow-hidden">
          <div
            className="bg-emerald-400 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-right mb-4 text-white">{Math.round(progress)}% completed</p>

        <h2 className="text-2xl font-semibold mb-4">{currentQuestion.question}</h2>
        {renderQuestion()}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-md disabled:opacity-30"
          >
            Back
          </button>
          {currentStep < totalQuestions - 1 ? (
            <button
              onClick={handleNext}
              className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md shadow-md transition disabled:opacity-50"
              disabled={
                currentQuestion.type === "grouped-inputs"
                  ? !answers.name || !answers.address || !answers.phone
                  : !answers[currentQuestion.id] || answers[currentQuestion.id]?.length === 0
              }
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-md transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
