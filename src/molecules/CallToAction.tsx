import React from 'react';

export interface Props {
  img: string;
  description: string;
  buttonText: string;
  title: string;
  onClick: () => {};
}

export const CallToAction = ({
  img,
  description,
  buttonText,
  title,
  onClick,
}: Props) => {
  return (
    <section className="relative py-16 cursor-pointer" onClick={onClick}>
      <div className="relative h-96 min-w-[300px]">
        <img src={img} className="rounded-2xl object-cover" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm bg-gray-900 text-white rounded-lg mt-5 px-4 py-2">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
