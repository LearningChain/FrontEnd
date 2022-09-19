import styled, {css} from 'styled-components';
import {colors, fontSize, fontWeight, shadows} from '../../../_shared';
import {Props} from 'react-select';


interface ThemeAtr {
  [light: string]: string;
  dark: string;
}

interface StatusAtr {
  [error: string]: string;
  default: string;
}

interface BorderColorAtr {
  [light: string] :{
    [error: string]: string;
    default: string;
  },
  dark: {
    error: string;
    default: string;
  }
}

const textColor: ThemeAtr = {
  light: colors.black,
  dark: colors.white,
};

const bgColor: ThemeAtr = {
  light: colors.gray50,
  dark: colors.gray900,
};

const focusBgColor: ThemeAtr = {
  light: colors.white,
  dark: colors.black,
};

const borderColor: BorderColorAtr = {
  light: {
    default: colors.gray50,
    error: colors.errorOpacity200,
  },
  dark: {
    default: colors.gray900,
    error: colors.errorOpacity200,
  },
};

const optionBgColor: ThemeAtr = {
  light: colors.gray200,
  dark: colors.gray600,
};

const optionTextColor: ThemeAtr = {
  light: colors.gray900,
  dark: colors.gray25,
};

const labelColor: ThemeAtr = {
  light: colors.gray900,
  dark: colors.gray25,
};

const msgColor: StatusAtr = {
  default: colors.gray400,
  error: colors.error,
};

const hoverColor: StatusAtr = {
  default: colors.blueOpacity200,
  error: colors.errorOpacity200,
};

const insetColor: StatusAtr = {
  default: colors.blue100,
  error: colors.errorOpacity200,
};

const focusColor: StatusAtr = {
  default: colors.blueOpacity100,
  error: colors.errorOpacity100,
};

const activeColor: StatusAtr = {
  default: colors.blueOpacity200,
  error: colors.errorOpacity200,
};

const requiredColor: StatusAtr = {
  default: colors.blue100,
  error: colors.errorOpacity200,
};

export const customStyles = (props: Props) => ({
  control: (provided: any) => ({
    ...provided,
    'padding': '2px 16px',
    'border': `1px solid ${borderColor[props.basetheme][props.status]}`,
    'borderRadius': '8px',
    'boxShadow': shadows.button,

    'backgroundColor': bgColor[props.basetheme],
    'transition': '0.3s',

    ':hover': {
      border: `1px solid ${hoverColor[props.status]}`,
      boxShadow: `inset 0 0 0 1px ${hoverColor[props.status]}`,
      backgroundColor: focusBgColor[props.basetheme],
    },

    ':focus-within:hover': {
      border: `1px solid ${insetColor[props.status]}`,
    },

    ':focus-within': {
      boxShadow: `0 0 0 3px ${focusColor[props.status]}, inset 0 0 0 1px ${
        insetColor[props.status]
      }`,
    },
  }),

  input: (provided: any) => ({
    ...provided,
    color: textColor[props.basetheme],
  }),

  singleValue: (provided: any) => ({
    ...provided,
    color: textColor[props.basetheme],
  }),

  placeholder: (provided: any) => ({
    ...provided,
    color: colors.gray500,
    whiteSpace: 'nowrap',
    minWidth: '40px',
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    'color': colors.gray500,

    ':hover': {
      color: colors.gray500,
    },
  }),

  indicatorsContainer: (provided: any) => ({
    ...provided,
    svg: {
      color: colors.gray500,
    },
  }),

  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: borderColor[props.basetheme],
  }),

  menu: (provided: any) => ({
    ...provided,
    top: '2.4rem',
    borderRadius: '8px',
    border: `1px solid ${borderColor[props.basetheme]}`,
    boxShadow: shadows.button,

    backgroundColor: bgColor[props.basetheme],
  }),

  menuList: (provided: any) => ({
    ...provided,
    color: textColor[props.basetheme],
  }),

  noOptionsMessage: (provided: any) => ({
    ...provided,
    color: colors.gray500,
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    'background': state.isFocused ? focusColor.default : bgColor[props.basetheme],
    'color': textColor[props.basetheme],

    ':active': {
      background: activeColor.default,
      color: textColor[props.basetheme],
    },
    ':first-of-type': {
      borderRadius: '3px 3px 0 0',
    },
    ':last-of-type': {
      borderRadius: '0 0 3px 3px',
    },
  }),

  multiValue: (provided: any) => ({
    ...provided,
    paddingLeft: '6px',
    borderRadius: '8px',
    backgroundColor: optionBgColor[props.basetheme],
  }),

  multiValueLabel: (provided: any) => ({
    ...provided,
    padding: '4px',
    color: optionTextColor[props.basetheme],
  }),

  multiValueRemove: (provided: any) => ({
    ...provided,
    'borderRadius': '2px 8px 8px 2px',
    'color': colors.gray500,

    ':hover': {
      backgroundColor: '#f8736a84',
      color: '#850900',
    },
  }),
});

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.div<{isRequired?: boolean; basetheme: string; status:string;}>`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  color: ${(props) => labelColor[props.basetheme]};
  ${(props) =>
    props.isRequired &&
    css`
      ::after {
        content: '*';
        color: ${requiredColor[props.status]};
        padding-left: 0.2rem;
      }
    `}
`;

export const Message = styled.div<{status:string;}>`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.regular};
  color: ${(props) => msgColor[props.status]};
`;
