import { forwardRef } from 'react';
import styled from 'styled-components';

const FieldSet = styled.fieldset`
  border: 0;
  max-width: ${({ theme }) => theme.dimensions.widths.forms};
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-top: ${({ theme }) => theme.dimensions.margin.intersection};
  padding-left: 0;
  padding-right: 0;
  & label {
    opacity: 0.6;
  }
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.dimensions.padding.largePadding};
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.dimensions.margin.small};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.dimensions.borderRadius.normal};
  background: ${({ theme }) => theme.colors.gray};
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.silver};
`;

const AppInput = forwardRef((props, ref) => {
  return (
    <FieldSet>
      <label htmlFor=''>{props.label}</label>
      <Input ref={ref} {...props} />
    </FieldSet>
  );
});

export default AppInput;
