import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  background: ${props => props.theme.colors.grayLight};
  min-height: 300px;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  border: 0;
  font-size: ${props => props.theme.fontSizes.lg};
  max-width: 900px;
  width: 80vw;
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
`;

const Form = () => (
  <StyledForm>
    <StyledInput placeholder="Buscar..." />
  </StyledForm>
);

export default Form;
