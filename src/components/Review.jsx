"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const reviewsofstudent = [
  {
    quote:
      "Enrolling in this AI course completely changed my career path! The lessons are practical, and the projects prepared me for real-world challenges.",
    name: "Ankita ",
    title: "NSUT student ",
  },
  {
    quote:
      "The community support and mentorship in this course are incredible. I went from knowing nothing about AI to building my own models confidently!",
    name: "Prabal verma",
    title: "NSUT student",
  },
  {
    quote:
      "This course gave me the tools to master AI concepts and land a job in the tech industry. The hands-on assignments made all the difference!",
    name: "Pranay",
    title: "NSUT student",
  },
  {
    quote:
      "I loved how they simplified complex AI topics and made them easy to understand. This course is a must for anyone looking to break into AI!",
    name: "Suyash",
    title: "NSUT student",
  },
  {
    quote:
      "The advanced modules on AI applications in business were game-changers for me. I can now confidently implement AI solutions at my workplace.",
    name: "Anmol",
    title: "NSUT student",
  },
  {
    quote:
      "I’ve taken many online courses, but this one stands out with its interactive approach and expert instructors. Worth every penny!",
    name: "GAURAV ",
    title: "NSUT student",
  },
  {
    quote:
      "The capstone projects in this course pushed me to think creatively and apply AI techniques in innovative ways. Highly recommend it!",
    name: "Radhika ",
    title: "NSUT student",
  },
  {
    quote:
      "This course gave me the confidence to start my own AI startup. The entrepreneurial guidance and technical depth were phenomenal!",
    name: "vijay ",
    title: "NSUT student",
  },
];

function Review() {
  return (
    <div className="h-[40rem] w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-neutral-300">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={reviewsofstudent}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
