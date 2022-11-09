import Button from '../../../components/commons/Button';
import Icon from '../../../components/foundations/Icon/Icon';
import React, {useRef} from 'react';
import {Layout, Input} from './Search.styles';

export interface BadgeProps {
  placeHold: string;
  click: (ref: React.RefObject<HTMLInputElement>) => void;
}

const Search = ({...props}: BadgeProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Layout>
      <Input placeholder={props.placeHold} ref={inputRef}></Input>
      <Button
        pattern={'iconAlone'}
        background={'#ACED22'}
        onClick={() => {
          props.click(inputRef);
        }}
      >
        <Icon
          icon="search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke=""
        />
      </Button>
    </Layout>
  );
};

export default Search;
