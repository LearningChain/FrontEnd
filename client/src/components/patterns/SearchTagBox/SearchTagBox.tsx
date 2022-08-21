import React from 'react';
import Button from '../../commons/Button';
import {Layout, TagBox, Title} from './SearchTagBox.styles';

export interface SearchTagBoxProps {
  title: string;
  keywords: string[];
}

const SearchTagBox = ({...props}: SearchTagBoxProps) => {
  return (
    <Layout>
      <Title>{props.title}</Title>
      <TagBox>
        {props.keywords.map((keyword) => {
          if (props.title === '내가 검색 한') {
            return (
              <Button
                pattern={'iconWithBackground'}
                background={'D9D9D9'}
                color={'black'}
              >
                <div>{keyword}</div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.59082 5.72754L13.3635 10.5003L8.59082 15.273"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            );
          } else {
            return (
              <Button pattern={'filter'} background={'D9D9D9'}>
                {keyword}
              </Button>
            );
          }
        })}
      </TagBox>
    </Layout>
  );
};

export default SearchTagBox;
