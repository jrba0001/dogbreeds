import React from 'react';
import PropTypes from 'prop-types';
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

const Form = ({ searchValue, updateSearchValue }) => (
  <StyledForm>
    <StyledInput placeholder="Buscar..." value={searchValue} onChange={updateSearchValue} />
  </StyledForm>
);

Form.propTypes = {
  searchValue: PropTypes.string.isRequired,
  updateSearchValue: PropTypes.func.isRequired,
};

export default Form;
