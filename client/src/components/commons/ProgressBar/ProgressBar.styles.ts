import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`;

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    margin-bottom: 2px;
`;

export const Bar = styled.div`
    height: 7px;
    width: 100%;
    position: relative;
`;

export const BaseBox = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 10px;
`;

export const Background = styled(BaseBox)`
    background: #e0e0e0;
    width: 100%;
`;

export type ProgressBarType = {
    percent: number | string;
};

export const Progress = styled(BaseBox)<ProgressBarType>`
 background: #be1e17;
  width: ${({percent}) => percent}%;

 `;

