"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Questionnaire from "./Questionnaire"; // Adjust path if needed

const Hero = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* TV Mount Map Layer */}
      <div className="hero-map" />

      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-40 lg:bold-52">
          Professional TV Mounting Made Easy
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Get your TV securely mounted by experts. We ensure perfect placement,
          hidden cables, and a sleek setup that transforms your space — all with
          fast, reliable service.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Let's Start"
            variant="btn_green"
            onClick={() => setShowQuestionnaire(true)}
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Right Card */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-6 shadow-lg">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-14 text-gray-20">Service Category</p>
              <Image src="/close.svg" alt="close" width={20} height={20} />
            </div>
            <p className="bold-16">TV Mounting Services</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-14 text-gray-20">Mount Types</p>
              <p className="bold-16">Fixed, Tilt, Full Motion</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-14 text-gray-20">TV Sizes Supported</p>
              <p className="bold-16">32" – 85"+</p>
            </div>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-14 text-gray-20">Wall Types</p>
              <p className="bold-16">Drywall, Concrete, Brick</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-14 text-gray-20">Cable Concealment</p>
              <p className="bold-16">Optional Add-on</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Questionnaire Modal */}
      {showQuestionnaire && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="relative w-screen h-screen flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setShowQuestionnaire(false)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400 z-50"
            >
              ×
            </button>

            {/* Questionnaire Fullscreen */}
            <div className="w-full h-full overflow-y-auto">
              <Questionnaire />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
