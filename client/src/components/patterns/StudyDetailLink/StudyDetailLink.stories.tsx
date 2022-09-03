import StudyDetailLink from '.';

export default {
  title: 'Patterns/StudyDetailLink',
  component: StudyDetailLink,
};

const data = {
  studyLink: 'http://open.kakao.com/o/s3dYFRke',
};

export const all = (args: any) => (
  <>
    <StudyDetailLink {...args}/>
  </>
);

all.args = {...data};
