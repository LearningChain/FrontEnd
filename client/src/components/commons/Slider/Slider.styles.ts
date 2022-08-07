import styled from 'styled-components';

export const Layout = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: none;
  border-radius: 12px;
  width: 108px;
  height: 204px;
  margin-left: 15px;
  background: #f3f3f3;
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  position: relative;
  height: 12px;
`;

export const SlideInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 0;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    background-color: #bcbcbc;
    box-shadow: 0px 0px 0px 12px #bcbcbc;
  }

  &:focus {
    outline: none;
  }
`;

export const SlideTrack = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  left: 0;
  height: 8px;
  background-color: #bcbcbc;
  border-radius: 12px;
  overflow: hidden;
  transform: translateZ(0);
`;

export const SliderLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin-top: 4px;

  font-size: 16px;
  font-weight: 600;
  color: #bcbcbc;
`;

export const SlideProgressContainer = styled.div`
  position: absolute;
  height: 100%;

  left: 20px;
  right: 20px;
  will-change: transform;
`;

export const SlideProgressBar = styled.span`
  position: absolute;
  background-color: #bcbcbc;
  height: 100%;

  left: calc(-100% - 36px);
  width: calc(100% + 36px);
`;
