"use client";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {
  const words = [
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Web",
    },
    {
      text: "Developer.",
    },
  ];

  return (
    <>
      <div className="h-auto my-[5rem] md:my-0 md:h-[78vh] pr-3 flex items-center justify-center">
        <div className="mx-[5rem] md:mx-[3rem] lg:mx-[12rem] w-full relative flex items-center justify-start sm:justify-center">
          <motion.h1 className="text-7xl font-bold xl:text-[5rem] text-left sm:text-center leading-tight md:leading-tight ">
            Hi, I&apos;m{" "}
            <span className=" decoration-2 underline-offset-[5px] decoration-[#74E291]">
              <span className="bg-clip-text font-protest font-normal  text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
                Gautham
              </span>
            </span>{" "}
            <TypewriterEffectSmooth words={words} />
          </motion.h1>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
        <AnimatePresence>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaArrowDownLong size={20} />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-[1rem] text-gray-600 text-center mt-4 ">
        I am a Full Stack Web Engineer based in India, I{" "}
        <span className="opacity-70">💛</span> building Web Apps. (sounds
        Interesting?)
      </p>
    </>
  );
};

export default Hero;
