import React from 'react';
import { Meta, Story } from '@storybook/react';
import location from '../../ressources/location-example.json';
import { MediumCardProps } from '../../src/atoms/MediumCard';
import {
  MediumCardSection,
  Props,
} from '../../src/molecules/MediumCardSection';

const defaultLocations: MediumCardProps[] = location;
const meta: Meta = {
  component: MediumCardSection,
  argTypes: {
    cardData: {
      defaultValue: defaultLocations,
      control: { disable: true },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <MediumCardSection {...args} />;

export const Default = Template.bind({});
