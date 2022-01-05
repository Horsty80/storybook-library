import React from 'react';
import { SmallCard, SmallCardProps } from '../atoms/SmallCard';

export interface Props {
  cardData: SmallCardProps[];
}

export const SmallCardSection = ({ cardData }: Props) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData?.map((item, i) => (
          <SmallCard
            key={i}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
