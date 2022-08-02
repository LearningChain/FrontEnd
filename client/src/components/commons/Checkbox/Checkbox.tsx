import React from 'react';
import {Layout, Icon, Label} from './Checkbox.styles';

export interface CheckboxProps {
  label?: string;
}

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
