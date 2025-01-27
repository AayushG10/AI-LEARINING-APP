"use client";
import React from "react";
import Link from "next/link";
import courseData from "../data/ai_couse.json";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import Image from "next/image";
import dogimage from "../../public/dog.jpeg";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function Featurecourse() {

    const featuredCourses = courseData.courses.filter(
      (course: Course) => course.isFeatured
    );


  return (
    <div>
      <div>
        <h1 className=" flex justify-center text-white text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURE COURSE
        </h1>
        <p className="flex justify-center text-white mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
          Learn with the best
        </p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={dogimage}
                      alt="dog"
                      width={450}
                      height={250}
                      className="rounded-xl"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    {/* <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem> */}
                  </div>
                </CardBody>
              </CardContainer>
              
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div> */}
    </div>
  );
}

export default Featurecourse;
