import * as React from 'react';
import { TextInputAreaStyled } from './style';
import { LabelStyled } from '../FormInput/style';

interface FormTextareaProps {
  label?: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.FormEvent) => void;
  error?: string;
}

const FormTextarea = (props: FormTextareaProps) => (
  <>
    {props.label && <LabelStyled>{props.label}</LabelStyled>}
    <TextInputAreaStyled
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
    {props.error && <div className="error">{props.error}</div>}
  </>
);

export default FormTextarea;
