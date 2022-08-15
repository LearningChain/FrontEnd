import {forwardRef, useImperativeHandle, useRef, useEffect} from 'react';
import {Layout, Label, InputBox, InputText, Message} from './Input.styles';

export interface InputProps{
  title?: string;
  placeholder?: string;
  message?: string;
  status: string;
  theme?: string;
  number?: number;
  isRequired?: boolean;
  disabled?: boolean;
  autocomplete?:string;
}

export interface InputRef {
  focus: () => void;
  get: () => string;
  reset: () => void;
  rawRef: () => React.RefObject<HTMLInputElement>;
}

const defaultProps = {
  theme: 'light',
  status: 'default',
  placeholder: 'Placeholder',
};

// eslint-disable-next-line react/display-name
const Input = forwardRef<InputRef, InputProps>(
    ({title, placeholder, message, status, ...props}, ref) => {
      const inputRef = useRef<HTMLInputElement>(null);

      useImperativeHandle(ref, () => {
        return {
          focus: () => {
            if (inputRef.current) inputRef.current.focus();
          },
          get: () => {
            return inputRef.current?.value || '';
          },
          reset: () => {
            if (inputRef.current) inputRef.current.value = '';
          },
          rawRef: () => {
            return inputRef;
          },
        };
      });

      useEffect(() => {
        if (inputRef.current) {
          inputRef.current.setSelectionRange(
              inputRef.current.value.length,
              inputRef.current.value.length,
          );
        }
      }, []);

      return (
        <Layout>
          <Label status={status} {...props}>
            {title}
          </Label>
          <InputBox status={status} {...props}>
            <InputText
              placeholder={placeholder}
              type={props.number ? 'number' : 'text'}
              status={status}
              ref={inputRef}
              autocomplete='off'
              {...props}
            />
          </InputBox>
          <Message status={status} >{message}</Message>
        </Layout>
      );
    },
);

Input.defaultProps = defaultProps;

export default Input;
