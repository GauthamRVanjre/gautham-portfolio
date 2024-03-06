import React from "react";
import TestimonialGrid from "./TestimonialGrid";

const Testimonials = () => {
  return (
    <div className="relative">
      <h2 className="text-center font-bold text-xl text-white-600 uppercase tracking-wider mb-6">
        Testimonials
      </h2>
      <p className="text-center text-2xl sm:text-3xl mb-6 font-extrabold">
        Look What people have to say about Me
      </p>

      <div className="dark:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[300px] h-[50px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div>

      <TestimonialGrid />
    </div>
  );
};

export default Testimonials;
