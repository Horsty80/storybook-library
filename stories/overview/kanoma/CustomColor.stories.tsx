import React from 'react';
import { Meta } from '@storybook/react';
import { CustomColor } from '../../../src/overview/CustomColor';

const meta: Meta = {
  component: CustomColor,
  argTypes: {
    color: {
      control: {
        options: ['primary', 'secondary'],
        type: 'select',
      },
    },
  },
};

export default meta;

export const Primary = () => <CustomColor color="primary" />;
export const Secondary = () => <CustomColor color="secondary" />;
export const Purple200 = () => (
  <CustomColor color="kanoma-purple" gradiant="500" />
);
export const Yellow200 = () => (
  <CustomColor color="kanoma-yellow" gradiant="500" />
);
