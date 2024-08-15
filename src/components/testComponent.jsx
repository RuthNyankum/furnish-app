import { Quote } from 'lucide-react';
import React from 'react';

const TestComponent = ({ message, image, person, position }) => {
  return (
    <div className="h-auto w-[350px] p-8">
      <div className="h-[40px] w-[40px] top-40 bg-white left-14 rounded-full flex justify-center items-center ">
        <Quote className="size-[15px]" />
      </div>
      <p className="mb-10">{message}</p>
      <div className="flex items-center gap-x-4">
        <img
          src={image}
          alt="image"
          className="h-[100px] w-[100px] rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-[22px] font-semibold"> {person} </span>
          <span className="text-[16px]"> {position} </span>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
