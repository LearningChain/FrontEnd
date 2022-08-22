import React from 'react';
import {Layout, ImageBox, Image, TextBox, Title, Writer, Description} from './StudyCard.styles';
import testimg from '../../../imgs/testImgs/test.jpg';

export interface StudyCardProps {
  image?: string;
  title: string;
  writer: string;
  description: string;
}


const StudyCard = ({title, writer, description, image}: StudyCardProps) => {
  return (
    <>
      <Layout>
        <ImageBox>
          <Image
            src={testimg}
            alt="thumbnail"
          />
        </ImageBox>
        <TextBox>
          <Title>{title}</Title>
          <Writer>{writer}</Writer>
          <Description>{description}</Description>
        </TextBox>
      </Layout>
    </>

  );
};

export default StudyCard;
