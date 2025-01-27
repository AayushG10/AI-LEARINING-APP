"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const aiLearningContent = [
  {
    title: "Unlock the Power of AI: A Personalized Learning Journey",
    description:
      "Embark on a transformative journey into the world of AI. Our personalized instruction adapts to your learning style, guiding you through the complexities of AI technologies and algorithms. With expert support at every step, you’ll develop the skills needed to become a leader in the AI field.",
  },
  {
    title: "AI Fundamentals: Building a Strong Foundation",
    description:
      "Dive deep into the essential concepts of Artificial Intelligence, from machine learning algorithms to neural networks. This foundational course will provide you with the knowledge to understand the core principles that power AI systems and open doors to advanced topics.",
  },
  {
    title: "Hands-On AI Projects: Learn by Doing",
    description:
      "Experience AI in action with real-world projects that give you practical, hands-on experience. From building your first AI model to deploying machine learning algorithms, you’ll gain valuable skills that will set you apart in the rapidly evolving AI industry.",
  },
  {
    title: "Live Feedback & Collaboration",
    description:
      "Engage in interactive learning with immediate feedback and collaborative sessions. Enhance your understanding of complex AI concepts through real-time problem-solving and group projects, mimicking the collaborative nature of AI development in the professional world.",
  },
  {
    title: "Cutting-Edge AI Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest advancements in AI and machine learning, ensuring that you’re always working with the most current tools and techniques. Say goodbye to outdated content and keep up with the rapid pace of AI innovation.",
  },
  {
    title: "Endless AI Learning Opportunities",
    description:
      "With a vast range of courses, tutorials, and resources at your fingertips, you’ll always have something new to explore. Our platform is designed to keep you learning and growing, so your skills evolve alongside the latest breakthroughs in AI technology.",
  },
];

function Whychooseus() {
  return (
    <div>
      <StickyScroll content={aiLearningContent} />
    </div>
  );
}

export default Whychooseus;
