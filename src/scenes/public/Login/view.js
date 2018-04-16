import React from 'react';
import PropTypes from 'prop-types';
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

const StyledError = styled.div`
  background: ${props => props.theme.colors.danger};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.sm};
`;

const Login = ({
  email, password, handleFieldChange, hasError, handleSubmit,
}) => (
  <StyledWrapper>
    {hasError && <StyledError>EL FORMULARIO TIENE ERRORES</StyledError>}
    <StyledForm onSubmit={handleSubmit}>
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

Login.defaultProps = {
  email: '',
  password: '',
  hasError: false,
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
};

export default Login;
