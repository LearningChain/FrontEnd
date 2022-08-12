import React from 'react';
import ImageBox from './ImageBox';

export default {
  title: 'Commons/ImageBox',
  component: ImageBox,
};

export const all = () => (
  <>
    <div>bookMarkImage</div>
    <br />
    <ImageBox pattern={'bookMarkImage'} />
    <br />
    <br />
    <ImageBox pattern={'bookMarkImage'} src={'/test'} alt={'test'} />
    <br />
    <br />
    <div>cardImage</div>
    <br />
    <ImageBox pattern={'cardImage'} />
    <br />
    <br />
    <ImageBox pattern={'cardImage'} src={'/test'} alt={'test'} />
    <br />
    <br />
    <div>loginImage</div>
    <br />
    <ImageBox pattern={'loginImage'} />
    <br />
    <br />
    <ImageBox pattern={'loginImage'} src={'/test'} alt={'test'} />
  </>
);
