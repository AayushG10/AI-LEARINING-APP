'use-client';
import React from 'react'
import { HoverEffect } from "../components/ui/card-hover";
import Link from "next/link";
function Webinar() {
  const featuredWebinars = [
    {
      title: "Introduction to AI and Machine Learning",
      description:
        "Explore the basics of artificial intelligence and machine learning to understand their core concepts. This webinar provides a solid foundation for beginners and lays the groundwork for advanced topics.",
      slug: "introduction-to-ai-and-ml",
      isFeatured: true,
    },
    {
      title: "AI in Everyday Life",
      description:
        "Learn how artificial intelligence is transforming industries and enhancing daily experiences. From virtual assistants to recommendation systems, discover the real-world applications of AI.",
      slug: "ai-in-everyday-life",
      isFeatured: true,
    },
    {
      title: "Deep Learning Demystified",
      description:
        "Discover the power of deep learning and its applications in various domains. Gain insights into neural networks, their architectures, and how they are driving innovation in AI.",
      slug: "deep-learning-demystified",
      isFeatured: true,
    },
    {
      title: "Natural Language Processing Essentials",
      description:
        "Understand how machines comprehend and generate human language with NLP. Explore text analysis, sentiment detection, and cutting-edge language models.",
      slug: "nlp-essentials",
      isFeatured: true,
    },
    {
      title: "Building AI-Powered Applications",
      description:
        "Get hands-on insights into building intelligent applications powered by AI. Learn best practices, tools, and frameworks to create impactful AI solutions.",
      slug: "ai-powered-applications",
      isFeatured: true,
    },
    {
      title: "Ethics in AI: Challenges and Solutions",
      description:
        "Learn how AI can drive innovation and efficiency in business strategies. This webinar covers case studies and actionable insights for decision-makers.",
      slug: "ethics-in-ai",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinar
