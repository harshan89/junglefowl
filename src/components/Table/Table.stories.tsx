import React from 'react';
import {Meta, Story} from '@storybook/react';
import Table from './Table';

interface Props {
    rows: Array<string[]>,
    headers: string[],
    borderWidth: 'medium',
    cellPadding: 'medium',
    cellTextColor: 'black',
    headerTextColor: 'white',
    cellBorderColor: '#747381',
    headerBorderColor: '#494866',
    backgroundColor: '#a6a5b8',
    headerBackgroundColor: '#65647a'
}

const meta: Meta = {
  title: 'Table Component',
  component: Table,
  argTypes: {
    rows: { control: '' },
    headers: { control: '' }
  },
};

export default meta;

const Template: Story<Props> = (args) => <Table {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  rows: [
    ['col-1', 'col-2', 'col-3', 'col-4', 'col-5'],
    ['col-1', 'col-2', 'col-3', 'col-4', 'col-5'],
  ],
  headers: ['Head 1', 'Head 2', 'Head 3', 'Head 4', 'Head 5'],
};