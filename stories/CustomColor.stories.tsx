import React from 'react';
import { Meta } from '@storybook/react';
import { CustomColor } from '../src/CustomColor';

const meta: Meta = {
  title: 'Components/Colors',
  component: CustomColor,
  argTypes: {
    color: {
      defaultValue: 'primary',
    },
  },
};

export default meta;

export const Purple200 = () => (
  <CustomColor color="kanoma-purple" gradiant="500" />
);
export const Yellow200 = () => (
  <CustomColor color="kanoma-yellow" gradiant="500" />
);
export const Primary = () => <CustomColor color="primary" />;

export const Secondary = () => <CustomColor color="secondary" />;
