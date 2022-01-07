import React from 'react';
import { Meta } from '@storybook/react';
import { ThemeColor } from '../../../src/overview/ThemeColor';

const meta: Meta = {
  component: ThemeColor,
  argTypes: {
    name: {
      defaultValue: 'kanoma-purple',
    },
  },
};

export default meta;

export const KanomaPurple = () => <ThemeColor name="kanoma-purple" />;
export const KanomaYellow = () => <ThemeColor name="kanoma-yellow" />;
