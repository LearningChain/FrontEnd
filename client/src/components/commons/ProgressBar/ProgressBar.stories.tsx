import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Commons/ProgressBar',
  component: ProgressBar,
};

export const all = () => (
  <>
    <ProgressBar name={'프로그세스 바'} level={'30'} percent={'50'}/>
  </>
);
