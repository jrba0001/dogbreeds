import React from 'react';
import styled from 'styled-components';

import { Button } from '../../../components';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.sm};
  background: ${props => props.theme.colors.grayLight};
  width: 800px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.sm};
`;

const StyledGroup = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: ${props => props.theme.space.xs};
`;

const Login = ({
  email, password, handleFieldChange, hasError,
}) => (
  <StyledWrapper>
    <StyledForm>
      <StyledGroup>
        <StyledLabel>Email</StyledLabel>
        <StyledInput onChange={handleFieldChange('email')} value={email} />
      </StyledGroup>
      <StyledGroup>
        <StyledLabel>Password</StyledLabel>
        <StyledInput type="password" onChange={handleFieldChange('password')} value={password} />
      </StyledGroup>
      <StyledGroup>
        <Button primary>Enviar</Button>
      </StyledGroup>
    </StyledForm>
  </StyledWrapper>
);

export default Login;
