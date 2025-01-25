"use client"
import Link from "next/link";
import {Spotlight} from "../components/ui/Spotlight";
import {CardContainer, CardBody, CardItem} from "../components/ui/3d-card";
import Image from "next/image";
import { Button } from "./ui/moving-border";


function Herosection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div>
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Want to Master{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            AI?
          </span>
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
          Explore our free AI courses and take your learning journey to the next
          level. Whether you're just starting out or looking to sharpen your
          expertise, join us and unlock your full potential in the world of AI.
        </p>
        <div className="mt-4 flex justify-center">
          <Link href={"/courses"}>
            <Button>Explore courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Herosection;

import React from "react";

// function Herosection() {
//   return (
//     <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
//       <div>
//          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//           Master the art of music
//         </h1>
//         <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
//           Dive into our comprehensive music courses and transform your musical
//           journey today. Whether you're a beginner or looking to refine your
//           skills, join us to unlock your true potential.
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Herosection
