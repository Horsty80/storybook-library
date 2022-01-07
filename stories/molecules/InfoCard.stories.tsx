import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import searchResult from '../../ressources/search-location-result.json';
import { InfoCard } from '../../src/molecules/InfoCard';

const defaultResult = searchResult[0];
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: InfoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    img: {
      defaultValue: defaultResult.img,
      control: { disable: true },
    },
    title: {
      defaultValue: defaultResult.title,
    },
    description: {
      defaultValue: defaultResult.description,
    },
    star: {
      defaultValue: defaultResult.star,
    },
    price: {
      defaultValue: defaultResult.price,
    },
    total: {
      defaultValue: defaultResult.total,
    },
  },
} as ComponentMeta<typeof InfoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
