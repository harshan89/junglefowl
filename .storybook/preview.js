import React from 'react';
import Center from '../src/components/Center/Center';
import { addDecorator } from '@storybook/react';

addDecorator(story => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}