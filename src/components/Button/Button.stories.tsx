import React from 'react';
import {Meta, Story} from '@storybook/react';
import Button from './Button';
import { Props } from './types';

const meta: Meta = {
    title: 'Form/Button',
    component: Button,
    // decorators: [(story: any) => <Center>{story()}</Center>]
}
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />

export const Default: Story<Props> = Template.bind({});
Default.args = {
    variant: "default",
    children: 'Button',
    size: 'sm'
}

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Button primary md',
    size: 'md'
}

export const Success: Story<Props> = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Button success l',
    size: 'l'
}

export const Danger: Story<Props> = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Button danger xl',
    size: 'xl'
}