import styled from 'styled-components';

export const TextInput = styled.input`
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;

  font-size: 1em; /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  color: #222;

  /* fullwidth conditionals */
  width: ${(props) => (props.fullwidth ? '100%' : '')};
  box-sizing: ${(props) => (props.fullwidth ? 'border-box' : '')};

  /* Removes awkward default styles on some inputs for iOS */
  /*-webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;*/

  :focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
`;

export const TextInputArea = styled.textarea`
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;

  font-size: 1em; /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  color: #222;

  /* fullwidth conditionals */
  width: ${(props) => (props.fullwidth ? '100%' : '')};
  box-sizing: ${(props) => (props.fullwidth ? 'border-box' : '')};

  /* Removes awkward default styles on some inputs for iOS */
  /*-webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;*/

  :focus {
    border: 1px solid #33c3f0;
    outline: 0;
  }
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

export const Select = styled(TextInput);

export const RadioBox = styled(TextInput)`
  display: inline;
`;

export const CheckBox = styled(RadioBox);

export const Legend = styled.legend`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Label = styled(Legend)`
  display: ${(props) => (props.body ? 'inline-block' : '')};
  margin-left: ${(props) => (props.body ? '.5rem' : '')};
  font-weight: ${(props) => (props.body ? 'normal' : '')};
  float: ${(props) => (props.floatright ? 'right' : props.floatleft ? 'left' : '')};
`;

export const Fieldset = styled.fieldset`
  margin-bottom: 1.5rem;
  padding: 0;
  border-width: 0;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
