import React from 'react';
import {Meta} from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Commons/Checkbox',
  component: Checkbox,
} as Meta;

export const all = () => (
  <>
    <Checkbox />
  </>
);
