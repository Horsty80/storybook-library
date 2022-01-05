import React from 'react';
import { MediumCard, MediumCardProps } from '../atoms/MediumCard';

export interface Props {
  cardData: MediumCardProps[];
}

export const MediumCardSection = ({ cardData }: Props) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {cardData?.map((item, i) => (
          <MediumCard key={i} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};
