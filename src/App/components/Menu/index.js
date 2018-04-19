import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: ${props => props.theme.fontSizes.md};
  margin-right: 30px;
  &.active {
    border-bottom: 6px solid ${props => props.theme.colors.white};
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Menu = ({ isLogged }) => (
  <StyledWrapper>
    <StyledLink exact to="/">
      Listado de mascotas
    </StyledLink>
    {!isLogged && <StyledLink to="/login">Login</StyledLink>}
    {isLogged && (
      <Fragment>
        <StyledLink to="/admin/addbreed">Añadir raza</StyledLink>
        <StyledLink to="/admin/breedlist">Eliminar raza</StyledLink>
        <StyledLink to="/admin/logout">Cerrar sesión</StyledLink>
      </Fragment>
    )}
  </StyledWrapper>
);

Menu.defaultProps = {
  isLogged: false,
};

Menu.propTypes = {
  isLogged: PropTypes.bool,
};

export default Menu;
