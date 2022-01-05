import React from 'react';

export interface MediumCardProps {
  img: string;
  title: string;
}

export const MediumCard = ({ img, title }: MediumCardProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <img src={img} className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};
