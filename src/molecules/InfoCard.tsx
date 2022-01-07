import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';

interface Props {
  img: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
  long: string;
  lat: string;
}

export const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}: Props) => {
  return (
    <div
      className="flex py-7 px-2 pr-4 border-b cursor-pointer
       hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
       first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <img
          src={img}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>

        {/* alone line break with tailwindcss */}
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400 cursor-pointer" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
