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
    <Input theme="light" pattern='CommentInput' status="default" placeholder="placeholder"/>
    <Input theme="dark" pattern='CommentInput' status="default" placeholder="placeholder"/>
  </Fragment>
);
