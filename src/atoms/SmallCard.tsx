import React from 'react';

export interface SmallCardProps {
  img: string;
  title: string;
  description: string;
}

export const SmallCard = ({ img, title, description }: SmallCardProps) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <img src={img} className="rounded-lg" />
      </div>
      {/* right */}
      <div className="">
        <h2>{title}</h2>
        <h3 className="text-gray-500">{description}</h3>
      </div>
    </div>
  );
};
