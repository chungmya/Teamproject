import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button } from './Button';


const meta:Meta<typeof Button> = {
	title:"Components/Button",
	component:Button,
	args: { onClick: fn() },
} 
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
	args: {
		label : "Add Todo",
	},
};

export const Disabled: Story = {
	args: {
		label : "Disabled",
		disabled: true,
	},
};