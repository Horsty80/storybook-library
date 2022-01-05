import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SmallCardProps, SmallCard } from '../../src/atoms/SmallCard';
import location from '../../ressources/location.json';

const defaultLocation: SmallCardProps = location[0];
export default {
  component: SmallCard,
  argTypes: {
    img: {
      defaultValue: defaultLocation.img,
      control: { disable: true },
    },
    title: {
      defaultValue: defaultLocation.title,
    },
    description: {
      defaultValue: defaultLocation.description,
    },
  },
};

// export default meta;

const Template: Story<SmallCardProps> = (args) => <SmallCard {...args} />;

export const Default = Template.bind({});
