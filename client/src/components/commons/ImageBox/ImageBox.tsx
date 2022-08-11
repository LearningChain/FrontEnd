import React from 'react';
import {Layout} from './ImageBox.styles';
import testimg from '../../../imgs/testImgs/test.jpg';

export interface ImageBoxProps {
  children?: React.ReactNode;
  pattern: string;
  src?: string;
  alt?: string;
}

const ImageBox = ({children, ...props}: ImageBoxProps) => {
  return <Layout {...props} src={props.src ? testimg : undefined} />;
};

export default ImageBox;
