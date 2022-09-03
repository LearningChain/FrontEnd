import Badge from '../../commons/Badge/Badge';
import {Layout, DueDate, DueDateDescription, Title, Writer, UserName, WriterJob, StudyDetailBox, StudyDetailInfo, Category, Description, Content, TagBox} from './StudyDetail.styles';
// import Avatar from '../../commons/Avatar/Avatar';
import Button from '../../commons/Button';

export interface StudyDetailProps {
  duedate: string;
  duedateDescription: string;
  title: string;
  username: string;
  job: string;
  theme: string;
  people: string;
  date: string;
  place: string;
  content: string;
  keywords: string[];
}

const StudyDetail = ({duedate, duedateDescription, title, username, job, theme, people, date, place, content, keywords, ...props}: StudyDetailProps) => {
  return (
    <Layout>
      <DueDate>
        <Badge pattern={'radiusRectangle'} theme={'light'}>{duedate}</Badge>
        <DueDateDescription>{duedateDescription}</DueDateDescription>
      </DueDate>
      <Title>{title}</Title>
      <Writer>
        <UserName>{username}</UserName>
        <WriterJob>{job}</WriterJob>
      </Writer>
      {/* <Avatar
        pattern={'nonIconAvatar'}
        useImg={'/testlink'}
        width={'50px'}
        height={'50px'}
      /> */}
      <StudyDetailBox>
        <StudyDetailInfo>
          <Category>주제</Category>
          <Description>{theme}</Description>
        </StudyDetailInfo>
        <StudyDetailInfo>
          <Category>인원</Category>
          <Description>{people}</Description>
        </StudyDetailInfo>
        <StudyDetailInfo>
          <Category>일시</Category>
          <Description>{date}</Description>
        </StudyDetailInfo>
        <StudyDetailInfo>
          <Category>장소</Category>
          <Description>{place}</Description>
        </StudyDetailInfo>
      </StudyDetailBox>
      <Content>{content}</Content>
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
    </Layout>
  );
};

export default StudyDetail;

