import styled, {css} from 'styled-components';
import {InputProps} from './Input';

interface ThemeAtr {
  [light: string]: string;
  dark: string;
}

interface StatusAtr {
  [error: string]: string;
  default: string;
  success: string;
}

interface BorderColorAtr {
  [light: string] :{
    [error: string]: string;
    default: string;
    success: string;
  },
  dark: {
    error: string;
    default: string;
    success: string;
  }
}

const textColor:ThemeAtr = {
  light: '#1B1F24',
  dark: '#FFFFFF',
};

const bgColor:ThemeAtr = {
  light: '#F1F3F5',
  dark: '#292D32',
};

const focusBgColor:ThemeAtr = {
  light: '#FFFFFF',
  dark: '#1B1F24',
};

const labelColor:ThemeAtr = {
  light: '#292D32',
  dark: '#F1F3F5',
};

const borderColor: BorderColorAtr = {
  light: {
    default: '#F1F3F5',
    error: '#F04438CF',
    success: '#F1F3F5',
  },
  dark: {
    default: '#292D32',
    error: '#F04438CF',
    success: '#292D32',
  },
};

const msgColor: StatusAtr = {
  default: '#ADB5BD',
  error: '#F04438',
  success: '#4A83EF',
};

const hoverColor: StatusAtr = {
  default: '#4A83EF77',
  error: '#F04438CF',
  success: '#4A83EF77',
};

const insetColor: StatusAtr = {
  default: '#4A83EF',
  error: '#F04438CF',
  success: '#4A83EF',
};

const focusColor: StatusAtr = {
  default: '#4A83EF33',
  error: '#F8736A33',
  success: '#4A83EF33',
};

const requiredColor: StatusAtr = {
  default: '#4A83EF',
  error: '#F04438CF',
  success: '#4A83EF',
};

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputBox = styled.div<InputProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 42px;
  padding: 0 16px;
  border: 1px solid ${(props) => borderColor[props.theme][props.status]};
  border-radius: 8px;
  background-color: ${(props) => bgColor[props.theme]};
  font-size: "0.875rem";
  color: "#868E96";
  box-shadow: "0px 1px 1px rgba(0,0,0,0.05)";
  transition: 0.3s;
  svg {
    height: 18px;
    width: 18px;
  }
  ${(props) => css`
    :hover {
      border: 1px solid ${hoverColor[props.status]};
      box-shadow: inset 0 0 0 1px ${hoverColor[props.status]};
      background-color: ${focusBgColor[props.theme]};
    }
    :focus-within {
      box-shadow: 0 0 0 3px ${focusColor[props.status]},
        inset 0 0 0 1px ${insetColor[props.status]};
      background-color: ${focusBgColor[props.theme]};
    }
    :focus-within:hover {
      border: 1px solid ${insetColor[props.status]};
    }
  `}
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      input {
        color: transparent;
      }
    `}
`;

export const InputText = styled.input<InputProps>`
  width: 100%;
  margin-left: 8px;
  border: none;
  background: transparent;
  font-size: "1rem";
  font-weight: "400";
  color: ${(props) => textColor[props.theme]};
  transition: 0.3s;
  ::placeholder {
    color: "#868E96";
    font-size: "1rem";
  }
  :focus {
    outline: none;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${(props) => textColor[props.theme]} !important;
  }
`;

export const Label = styled.label<InputProps>`
  font-size: "0.875rem";
  font-weight: "700";
  color: ${(props) => labelColor[props.theme]};
  ${(props) =>
    props.isRequired &&
    css`
      ::after {
        content: "*";
        color: ${requiredColor[props.status]};
        padding-left: 0.2rem;
      }
    `}
`;

export const Message = styled.div<InputProps>`
  font-size: "0.875rem";
  font-weight: "400";
  color: ${(props) => msgColor[props.status]};
`;
