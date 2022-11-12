import Badge from '../../commons/Badge';
import React from 'react';
import {Layout, Content, Header, DueDate, KeywordBox, Title, Description, TagBox} from './StudyCard.styles';
import Button from '../../commons/Button';

export interface StudyCardProps {
  title: string;
  duedate: string;
  description: string;
  keywords: string[];
}


const StudyCard = ({title, duedate, description, keywords}: StudyCardProps) => {
  return (
    <>
      <Layout>
        <Content>
          <Header>
            <DueDate>
              <Badge pattern={'DdayBadge'} theme={'light'}>{duedate}</Badge>
              </DueDate> 
              <Title>{title}</Title>
          </Header>        
          <Description>{description}</Description>
          <KeywordBox>
            <TagBox>
              {keywords.map((keyword, index) => {
                return (
                  <Button
                    key={index}
                    pattern={'iconWithBackground'}
                    background={'D9D9D9'}
                    color={'black'}
                  >
                    {keyword}
                  </Button>
                );
              })}
            </TagBox>
          </KeywordBox>
        </Content>
      </Layout>
    </>
  );
};

export default StudyCard;
