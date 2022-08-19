import {Fragment} from 'react';
import Input from './Input';

export default {
  title: 'Commons/Input',
  component: Input,
};

export const all = () => (
  <Fragment>
    <Input theme="light" status="default" placeholder="placeholder"/>
    <Input theme="light" title="라벨" status="default" placeholder="placeholder"/>
    <Input
      theme="light"
      title="라벨"
      message="This is a hint text to help user."
      status="default"
      placeholder="placeholder"
    />
    <Input
      theme="light"
      title="라벨"
      status="error"
      message="This is error message."
      placeholder="placeholder"
    />
    <br />
    <div>Icons</div>
    <Input theme="light" status="default" placeholder="placeholder" />
    <Input theme="light" title="메일" status="default" placeholder="placeholder" />
    <Input
      theme="light"
      title="메일"
      message="가입한 이메일 주소를 입력하세요."
      status="default"
      placeholder="placeholder"
    />
    <Input
      theme="light"
      title="메일"
      status="error"
      message="이메일 형식이 잘못되었습니다."
      placeholder="placeholder"
    />
    <div>
        Default
    </div>
    <Input theme="dark" status="default" placeholder="placeholder" />
    <Input theme="dark" title="라벨" status="default" placeholder="placeholder"/>
    <Input
      theme="dark"
      title="라벨"
      message="This is a hint text to help user."
      status="default"
      placeholder="placeholder"
    />
    <Input
      theme="dark"
      title="라벨"
      status="error"
      message="This is error message."
      placeholder="placeholder"
    />
    <br />
    <div>
      Icons
    </div>
    <Input theme="dark" status="default" placeholder="placeholder" />
    <Input theme="dark" title="메일" status="default" placeholder="placeholder" />
    <Input
      theme="dark"
      title="메일"
      message="가입한 이메일 주소를 입력하세요."
      status="default"
      placeholder="placeholder"
    />
    <Input
      theme="dark"
      title="메일"
      status="error"
      message="이메일 형식이 잘못되었습니다."
      placeholder="placeholder"
    />
  </Fragment>
);
