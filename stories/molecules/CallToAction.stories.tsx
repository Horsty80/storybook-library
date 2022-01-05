import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CallToAction, Props } from '../../src/molecules/CallToAction';

const defaultCta: Omit<Props, 'onClick'> = {
  img: './images/cta/greatest-outdoors.jpeg',
  title: 'The Greatest Outdoors',
  description: 'Wishlists curated by Airbnb.',
  buttonText: 'Get Inspired',
};

const meta: Meta = {
  component: CallToAction,
  argTypes: {
    onClick: { action: 'clicked' },
    img: {
      defaultValue: defaultCta.img,
      control: { disable: true },
    },
    title: {
      defaultValue: defaultCta.title,
    },
    description: {
      defaultValue: defaultCta.description,
    },
    buttonText: {
      defaultValue: defaultCta.buttonText,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <CallToAction {...args} />;

export const Default = Template.bind({});
