import styled from 'styled-components';

export const Layout = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    display: none;
  }

  input:checked + .icon {
    border-color: green;
    background-color: green;
  }

  input:checked + .icon::before {
    height: 7px;
    transition: all 0.1s;
  }

  input:checked + .icon::after {
    height: 11px;
    transition: all 0.1s ease 0.1s;
  }
`;

export const Icon = styled.div`
  position: relative;
  flex-shrink: 0;

  width: 18px;
  height: 18px;
  border: 1px solid gray;
  border-radius: 18px;

  background-color: transparent;

  cursor: pointer;
  transition: 0.2s;

  ::before,
  ::after {
    position: absolute;
    display: inline-block;

    content: "";
    width: 2px;
    height: 0;
    border-radius: 2px;

    background-color: white;
    transform-origin: left top;
  }

  ::before {
    top: 9px;
    left: 2px;
    transform: rotate(-55deg);
  }

  ::after {
    top: 13px;
    left: 8px;
    transform: rotate(-145deg);
  }
`;

export const Label = styled.span`
  color: gray;
  font-size: 15px;
  line-height: 18px;
  user-select: none;
`;
