import React, {useState} from 'react';
import Icon from '../../foundations/Icon/Icon';
import {Layout, Title, LockedStudyLink, StudyLinkDescriptionBox, StudyLinkDescription, StudyLink, BoxContainer, StudyLinkBackground} from './StudyDetailLink.styles';

export interface StudyDetailLinkProps {
  studyLink: string;
}

const StudyDetailLink = ({studyLink}: StudyDetailLinkProps) => {
  const [studyLinkVisible, setStudyLinkVisible] = useState(false);

  return (
    <Layout>
      <Title>스터디 링크</Title>
      <LockedStudyLink onClick={() => setStudyLinkVisible(!studyLinkVisible)}>
        {studyLinkVisible? (
          <BoxContainer>
            <StudyLinkDescriptionBox>
              <Icon icon={'lock'} />
              <StudyLinkDescription>참여 승인이 나면 링크가 보여요</StudyLinkDescription>
            </StudyLinkDescriptionBox>
            <StudyLinkBackground>{studyLink}</StudyLinkBackground>
          </BoxContainer>
          ) : (
        <StudyLink>{studyLink}</StudyLink>
          )}
      </LockedStudyLink>
    </Layout>
  );
};

export default StudyDetailLink;
