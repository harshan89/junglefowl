import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { Props } from './types';

const args: Props = {
  variant: "default",
  children: 'Button',
  size: 'sm'
}

describe('Button testing ', () => {
  test('Render button', () => {
    const { queryByText } = render(<Button {...args} />);
  
    expect(queryByText('Button')).toBeTruthy();
  });
})