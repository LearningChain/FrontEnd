
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Layout, HorizonLine, InputTitle } from './ContentCreatreForm.styles';

export interface ContentCreateFormProps {  
}

const ContentCreateForm = () => {
  return (
    <>
      <Layout>
        <InputTitle placeholder='제목을 입력하세요'/>
        <HorizonLine />
        <Editor 
        placeholder='텍스트 또는 콘텐츠를 추가해주세요'
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock']
        ]}
        ></Editor>
      </Layout>
    </>
  )
};

export default ContentCreateForm;