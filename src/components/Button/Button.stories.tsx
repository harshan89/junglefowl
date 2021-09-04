import React from 'react';
import Button from './Button';

interface Args {
    variant?: String,
    children: React.ReactNode,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    size?: String
}

export default {
    title: 'Form/Button',
    component: Button
}

const Template = (args: Args) => <Button {...args} />

export const Default: any = Template.bind({});
Default.args = {
    variant: 'default',
    children: 'Button',
    size: 'sm'
}

export const Primary: any = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Button',
    size: 'md'
}

export const Success: any = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Button',
    size: 'md'
}

export const Danger: any = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Button',
    size: 'md'
}