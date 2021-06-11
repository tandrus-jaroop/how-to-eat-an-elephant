import React from "react";
import { Story, Meta } from "@storybook/react";

import { Todo } from ".";

export default {
    title: "how to eat an elephant/todo",
    component: Todo,
} as Meta;

const Template: Story = (args) => (
    <div
        style={{
            backgroundColor: "#e4e4e4",
            width: "100%",
            height: "100%",
            padding: "50px",
        }}
    >
        <Todo {...args} />
    </div>
);

export const SomeItemsWithoutEdit = Template.bind({});
SomeItemsWithoutEdit.args = {};
export const SomeItemsWithEdit = Template.bind({});
SomeItemsWithEdit.args = {};
export const NoItems = Template.bind({});
NoItems.args = {};
