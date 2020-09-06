import * as React from 'react';
import { LabelStyled } from '@components/FormInput/style';
import { TextInputAreaStyled } from './style';

interface FormTextareaProps {
  label?: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormTextarea = (props: FormTextareaProps) => (
  <>
    {props.label && <LabelStyled htmlFor={props.id}>{props.label}</LabelStyled>}
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

FormTextarea.defaultProps = {
  label: null,
  error: null,
};

export default FormTextarea;
