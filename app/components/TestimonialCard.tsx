"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type TestimonialCardDataType = {
  name: string;
  image: string;
  description: string;
  designation: string;
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialCardDataType;
}) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="7px"
      className="h-fit"
    >
      <div className="min-w-[100px] flex min-h-[150px] dark:bg-zinc-800 text-white">
        <div className="p-4 pt-8">
          <Image
            key={testimonial.image}
            src={testimonial.image}
            alt={testimonial.image}
            width={80}
            height={40}
          />
        </div>
        <div className="ml-4 pt-4">
          <a
            className="rounded bg-green-100   text-green-800 text-xl font-bold me-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300"
            href={testimonial.designation}
            target="_blank"
          >
            {testimonial.name}
          </a>
          <p className="opacity-80 mt-2">{testimonial.description}</p>
          <h3 className="text-xl font-bold my-3">{testimonial.designation}</h3>
        </div>
      </div>
    </Tilt>
  );
};

export default TestimonialCard;
