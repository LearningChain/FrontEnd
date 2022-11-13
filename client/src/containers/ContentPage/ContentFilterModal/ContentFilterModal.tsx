import ButtonList from '../../../components/layouts/ButtonList';
import {useEffect} from 'react';
import {
  ButtonBox,
  Layout,
  SubBlock,
  SubLayout,
  SubTitle,
  Title,
} from './ContentFilter.style';
import Button from '../../../components/commons/Button';

interface ContentFilterModalProps {
  setFilterSelected: React.Dispatch<React.SetStateAction<boolean>>;
  filterInfo: {
    [index: string]: {
      [index: string]: string;
    };
  };
  setFilterInfo: React.Dispatch<
    React.SetStateAction<{
      [index: string]: {
        [index: string]: string;
      };
    }>
  >;
}

const ContentFilterModal = ({
  setFilterSelected,
  filterInfo,
  setFilterInfo,
}: ContentFilterModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <Layout></Layout>
      <SubLayout>
        <Title>필터</Title>
        {Object.keys(filterInfo).map((subTitle, index) => {
          return (
            <SubBlock key={subTitle}>
              <SubTitle>{subTitle}</SubTitle>
              <ButtonList
                pattern={'filter'}
                buttonInfos={filterInfo[subTitle]}
                change={(keyword) => {
                  const newFilterInfo = JSON.parse(JSON.stringify(filterInfo));
                  if (newFilterInfo[subTitle][keyword] === 'dark') {
                    newFilterInfo[subTitle][keyword] = 'light';
                  } else {
                    newFilterInfo[subTitle][keyword] = 'dark';
                  }
                  setFilterInfo(newFilterInfo);
                }}
                wrap={'wrap'}
              />
              {}
            </SubBlock>
          );
        })}
        <ButtonBox>
          <Button pattern={'roundRectangle'} bright={'light'}>
            필터 초기화
          </Button>
          <Button
            pattern={'roundRectangle'}
            bright={'light'}
            onClick={() => setFilterSelected(false)}
          >
            선택 완료
          </Button>
        </ButtonBox>
      </SubLayout>
    </>
  );
};

export default ContentFilterModal;
