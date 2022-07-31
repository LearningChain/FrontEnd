import React from 'react';
import type {CheckboxProps} from './Checkbox.types';

import {Layout, Icon, Label} from './Checkbox.styles';

const Checkbox = ({label, ...props} : CheckboxProps) => {
  return (
    <Layout>
      <input type="checkbox" {...props}/>
      <Icon className="icon" />
      <Label>{label}</Label>
    </Layout>
  );
};

Checkbox.defaultProps ={
  label: 'Label',
};

export default Checkbox;
