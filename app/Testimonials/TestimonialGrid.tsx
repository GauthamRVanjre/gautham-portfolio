import React from "react";
import { Testimonials } from "../data/data";
import TestimonialCard from "./TestimonialCard";
import AnimatedDiv from "../components/AnimatedDiv";

const TestimonialGrid = () => {
  return (
    <>
      <AnimatedDiv ClassName="grid sm:grid-cols-2 mt-3 md:p-0 gap-4 sm:gap-5">
        {Testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.image} testimonial={testimonial} />
        ))}
      </AnimatedDiv>
    </>
  );
};

export default TestimonialGrid;
