import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  // default value for args parameter
  argTypes: {
    // default behavior for action like onClick
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = () => <Button variant="primary">CLICK ME</Button>;

export const Secondary = () => <Button variant="secondary">I am button</Button>;

export const TemplatingButtonWithoutArgs = Template.bind({});

export const TemplatingButtonWithArgs = Template.bind({});

TemplatingButtonWithArgs.args = {
  variant: 'secondary',
  children: 'I am templating button',
  onClick: action('secondary click'),
};
