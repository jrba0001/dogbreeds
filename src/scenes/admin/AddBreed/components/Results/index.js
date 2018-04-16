import React from 'react';
import styled from 'styled-components';
import { darken, timingFunctions } from 'polished';

const StyledResult = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  display: block;
  width: 100%;
  padding: ${props => props.theme.space.sm};
  font-size: ${props => props.theme.fontSizes.md};
  transition: background 0.1s ${timingFunctions('easeInQuad')};
  &:hover {
    background: ${props => darken(0.15, props.theme.colors.secondary)};
  }
`;

const Results = () => (
  <div>
    <StyledResult>Bulldog</StyledResult>
    <StyledResult>Bulldog</StyledResult>
    <StyledResult>Bulldog</StyledResult>
    <StyledResult>Bulldog</StyledResult>
  </div>
);

export default Results;
