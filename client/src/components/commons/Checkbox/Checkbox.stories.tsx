import React from 'react';
import {Story, Meta} from '@storybook/react';
import Checkbox from './Checkbox';
import type {CheckboxProps} from './Checkbox.types';

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
