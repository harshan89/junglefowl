import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { Props } from 'types';

describe('Button testing ', () => {
  test('Render button', () => {
    const { queryByText } = render(<Button variant='default' children='Button' size='sm' />);
  
    expect(queryByText('Button')).toBeTruthy();
  });
})