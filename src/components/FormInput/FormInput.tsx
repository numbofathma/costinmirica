import * as React from 'react';
import { LabelStyled, TextInputStyled } from './style';

interface FormInputProps {
  label?: string;
  type: 'text' | 'email' | 'password' | 'number';
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput = (props: FormInputProps) => (
  <>
    {props.label && <LabelStyled htmlFor={props.id}>{props.label}</LabelStyled>}
    <TextInputStyled
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
    {props.error && <div className="error">{props.error}</div>}
  </>
);

FormInput.defaultProps = {
  label: null,
  error: null,
};

export default FormInput;
