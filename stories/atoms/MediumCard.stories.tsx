import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MediumCardProps, MediumCard } from '../../src/atoms/MediumCard';
import location from '../../ressources/location-example.json';

const defaultLocation: MediumCardProps = location[0];
const meta: Meta = {
  component: MediumCard,
  argTypes: {
    img: {
      defaultValue: defaultLocation.img,
      control: { disable: true },
    },
    title: {
      defaultValue: defaultLocation.title,
    },
  },
};

export default meta;

const Template: Story<MediumCardProps> = (args) => <MediumCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...defaultLocation,
};
