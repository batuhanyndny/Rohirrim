// Button.stories.js|jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		textAlign: {
			control: { type: 'radio' },
			options: ['left', 'center', 'right'],
		},
	},
	args: {
		children: 'Button',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
	icon: '🌟',
};
Icon.argTypes = {
	iconPosition: {
		options: ['left', 'right'],
		control: { type: 'radio' },
	},
};
