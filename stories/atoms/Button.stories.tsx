import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../../src/atoms/Button";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  component: Button,
  // default value for args parameter
  argTypes: {
    // default behavior for action like onClick
    onClick: { action: "clicked" },
    children: {
      defaultValue: "Default Text",
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
  variant: "secondary",
  children: "I am templating button",
  onClick: action("secondary click"),
};

// New story using the play function
export const WithInteractions = () => <Button variant="primary">Button</Button>;

WithInteractions.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("link"));
};

WithInteractions.storyName = "button with interactions";
