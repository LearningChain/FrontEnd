import React from 'react';
import styled from 'styled-components';
import {Props} from 'react-select';

import Selector from './Selector';

export default {
  title: 'Commons/Selector',
  component: Selector,
};

export const all = (args:Props) => (
  <>
    <div style={styles.white}>
      <TypeBox>
        <Selector status='default' basetheme='light' isMulti options={args.options} />
        <Selector status='default' basetheme='light' title='라벨' isMulti options={args.options} />
        <Selector
          status='default'
          basetheme='light'
          title='라벨'
          message='This is a hint text to help user.'
          isMulti
          options={args.options}
        />
        <Selector
          basetheme='light'
          title='라벨'
          status='error'
          message='This is error message.'
          isMulti
          options={args.options}
        />
      </TypeBox>
    </div>
    <div style={styles.dark}>
      <TypeBox>
        <Selector status='default' basetheme='dark' isMulti options={args.options} />
        <Selector status='default' basetheme='dark' title='라벨' isMulti options={args.options} />
        <Selector
          status='default'
          basetheme='dark'
          title='라벨'
          message='This is a hint text to help user.'
          isMulti
          options={args.options}
        />
        <Selector
          basetheme='dark'
          title='라벨'
          status='error'
          message='This is error message.'
          isMulti
          options={args.options}
        />
      </TypeBox>
    </div>
  </>
);

all.args = {
  options: [
    {value: 'Android', label: 'Android'},
    {value: 'C++', label: 'C++'},
    {value: 'Django', label: 'Django'},
    {value: 'Docker', label: 'Docker'},
    {value: 'Flutter', label: 'Flutter'},
    {value: 'Go', label: 'Go'},
    {value: 'JPA', label: 'JPA'},
    {value: 'Java', label: 'Java'},
    {value: 'JavaScript', label: 'JavaScript'},
    {value: 'Kotlin', label: 'Kotlin'},
    {value: 'Linux', label: 'Linux'},
    {value: 'Mybatis', label: 'Mybatis'},
    {value: 'Node.js', label: 'Node.js'},
    {value: 'Python', label: 'Python'},
    {value: 'React', label: 'React'},
    {value: 'Redis', label: 'Redis'},
    {value: 'SQL', label: 'SQL'},
    {value: 'Spring', label: 'Spring'},
    {value: 'Swift', label: 'Swift'},
    {value: 'TypeScript', label: 'TypeScript'},
    {value: 'Vue.js', label: 'Vue.js'},
  ],
  placeholder: 'Placeholder',
};

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const styles: {[key: string]: React.CSSProperties} = {
  white: {
    backgroundColor: 'white',
  },
  black: {
    backgroundColor: 'black',
  },
};
