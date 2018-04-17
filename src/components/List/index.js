import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../';

const StyledWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: ${props => props.theme.space.md};
`;

const StyledItem = styled.div`
  position: relative;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.grayLight};
`;

const StyledName = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
`;

const StyledPicture = styled.div`
  width: 250px;
  height: 250px;
  margin-right: ${props => props.theme.space.sm};
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledDelete = styled(Button)`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${StyledItem}:hover & {
    display: block;
  }
`;

const List = ({ isAdmin, data }) => (
  <StyledWrapper>
    {data &&
      data.map(breedObj => (
        <StyledItem key={breedObj.name}>
          <StyledRow>
            <StyledPicture>
              <StyledImg src={breedObj.image} alt="" />
            </StyledPicture>
            <StyledName>{breedObj.name}</StyledName>
          </StyledRow>
          {isAdmin && <StyledDelete>Borrar</StyledDelete>}
        </StyledItem>
      ))}
  </StyledWrapper>
);

List.defaultProps = {
  isAdmin: false,
};

List.propTypes = {
  isAdmin: PropTypes.bool,
};

export default List;
