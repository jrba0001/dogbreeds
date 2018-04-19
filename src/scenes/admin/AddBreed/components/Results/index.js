import React, { Fragment } from 'react';
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

const StyledHighlight = styled.span`
  background: yellow;
  color: #000;
`;

const getHightlighted = (value, searchValue) => {
  const position = value.indexOf(searchValue);
  return (
    <Fragment>
      {value.slice(0, position)}
      <StyledHighlight key={value}>
        {value.slice(position, position + searchValue.length)}
      </StyledHighlight>
      {value.slice(position + searchValue.length)}
    </Fragment>
  );
  // return [
  //   value.slice(0, position),
  //   <StyledHighlight key={value}>
  //     {value.slice(position, position + searchValue.length)}
  //   </StyledHighlight>,
  //   value.slice(position + searchValue.length),
  // ];
};

const Results = ({ results, searchValue, addToList }) => (
  <div>
    {results.map(value => (
      <StyledResult onClick={addToList} key={value} value={value}>
        {getHightlighted(value, searchValue)}
      </StyledResult>
    ))}
  </div>
);

export default Results;
