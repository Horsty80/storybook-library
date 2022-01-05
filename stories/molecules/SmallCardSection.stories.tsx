import React from 'react';
import { Meta, Story } from '@storybook/react';
import location from '../../ressources/location.json';
import { SmallCardProps } from '../../src/atoms/SmallCard';
import { SmallCardSection, Props } from '../../src/molecules/SmallCardSection';

const defaultLocations: SmallCardProps[] = location;
const meta: Meta = {
  component: SmallCardSection,
  argTypes: {
    cardData: {
      defaultValue: defaultLocations,
      control: { disable: true },
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <SmallCardSection {...args} />;

export const Default = Template.bind({});
