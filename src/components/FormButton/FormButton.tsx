import * as React from 'react';
import { ButtonStyled } from './style';

interface FormButtonProps {
  text: string;
  onClick: (e: React.FormEvent) => void;
}

const FormButton = (props: FormButtonProps) => (
  <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
);

export default FormButton;
