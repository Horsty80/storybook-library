import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeIcon } from '../../../src/overview/ThemeIcon';

const meta: Meta = {
  component: ThemeIcon,
  argTypes: {
    color: {
      defaultValue: 'primary',
    },
  },
};

export default meta;

export const KanomaPurple = () => <ThemeIcon color="primary" />;
export const KanomaYellow = () => <ThemeIcon color="secondary" />;
