import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutowidthInput } from "..";

export default {
  title: "AutowidthInput",
  component: AutowidthInput,
  argTypes: {},
} as ComponentMeta<typeof AutowidthInput>;

const Template: ComponentStory<typeof AutowidthInput> = (args) => (
  <AutowidthInput {...args} />
);

export const WithOptions = Template.bind({});

WithOptions.args = {
  extraWidth: 20,
  minWidth: 0,
  placeholderIsMinWidth: true,
  placeholder: "Sample placeholder",
};
