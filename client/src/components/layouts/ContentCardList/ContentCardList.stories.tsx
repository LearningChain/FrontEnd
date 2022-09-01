import React from 'react';
import ContentCardList, {ContentCardListProps} from './ContentCardList';

export default {
  title: 'Layouts/ContentCardList',
  component: ContentCardList,
};

const data = [
  {
    title: '콘텐츠 제목1',
    writer: '글쓴이1',
    description: '두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 ',
  },
  {
    title: '콘텐츠 제목2',
    writer: '글쓴이2',
    description: '두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 ',
  },
  {
    title: '콘텐츠 제목3',
    writer: '글쓴이3',
    description: '두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 ',
  },
  {
    title: '콘텐츠 제목4',
    writer: '글쓴이4',
    description: '두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 ',
  },
  {
    title: '콘텐츠 제목5',
    writer: '글쓴이5',
    description: '두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 ',
  },
];

export const all = (args: ContentCardListProps) => (
  <>
    <div>ContentCardLight</div>
    <br />
    <ContentCardList theme={'light'} data={data}/>
    <br />
    <div>ContentCardDark</div>
    <br />
    <ContentCardList theme={'dark'} data={data}/>
    <br />
  </>
);

all.args = {...data};
