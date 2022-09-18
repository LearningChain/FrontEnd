import React, {forwardRef} from 'react';

import Select, {Props} from 'react-select';
import Creatable from 'react-select/creatable';

import {customStyles, Layout, Label, Message} from './Selector.styles';

interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
// eslint-disable-next-line
    IsMulti extends boolean,
// eslint-disable-next-line
    Group extends GroupBase<Option>
  > {
    title?: string;
    message?: string;
    status: 'default' | 'error';
    basetheme: 'light' | 'dark';
    pattern?: string;
    creatable?: boolean;
    isRequired?: boolean;
  }
}

const Selector = forwardRef<any, Props>(
    ({title, options, placeholder, message, ...props}, ref) => {
      return (
        <Layout>
          <Label basetheme={props.basetheme} status={props.status} isRequired>{title}</Label>
          {props.creatable ? (
          <Creatable
            styles={customStyles(props)}
            options={options}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        ) : (
          <Select
            styles={customStyles(props)}
            options={options}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
        )}

          <Message status={props.status}>{message}</Message>
        </Layout>
      );
    },
);

// displayName을 준다.
Selector.displayName = 'Selector';

export default Selector;
