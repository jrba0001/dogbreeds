import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { timingFunctions } from 'polished';

import { Button } from '../';

const StyledWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: ${props => props.theme.space.md};
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
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
  width: 150px;
  height: 150px;
  margin-right: ${props => props.theme.space.sm};
  transition: all 0.3s ${timingFunctions('easeInOutBack')};
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 250px;
    height: 250px;
  }
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

const StyledWarning = styled.div`
  background: ${props => props.theme.colors.danger};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.sm};
`;

const List = ({ isAdmin, data, handleDelete }) => (
  <div>
    {!isAdmin && <button onClick={window.print}>Imprimir</button>}
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
            {isAdmin && (
              <StyledDelete value={breedObj.name} onClick={handleDelete}>
                Borrar
              </StyledDelete>
            )}
          </StyledItem>
        ))}
      {(!data || !data.length) && <StyledWarning>No se han encontrado resultados</StyledWarning>}
    </StyledWrapper>
  </div>
);

List.defaultProps = {
  isAdmin: false,
};

List.propTypes = {
  isAdmin: PropTypes.bool,
};

export default List;
