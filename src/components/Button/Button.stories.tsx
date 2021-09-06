import React from 'react';
import {Meta, Story} from '@storybook/react';
import Button from './Button';

interface Args {
    variant: 'primary' | 'secondary' | 'success' | 'danger',
    children: React.ReactNode,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    size: 'xs' | 'sm' | 'md' | 'l'| 'xl'
}

const meta: Meta = {
    title: 'Form/Button',
    component: Button,
    // decorators: [(story: any) => <Center>{story()}</Center>]
}
export default meta;

const Template: Story<Args> = (args) => <Button {...args} />

export const Default: any = Template.bind({});
Default.args = {
    variant: 'default',
    children: 'Button',
    size: 'Button default sm'
}

export const Primary: any = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Button primary md',
    size: 'md'
}

export const Success: any = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Button success l',
    size: 'l'
}

export const Danger: any = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Button danger xl',
    size: 'xl'
}