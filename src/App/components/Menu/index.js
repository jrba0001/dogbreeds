import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const Menu = ({ isAdmin }) => (
  <StyledWrapper>
    <StyledLink exact to="/">
      Listado de mascotas
    </StyledLink>
    {!isAdmin && <StyledLink to="/login">Login</StyledLink>}
    {isAdmin && (
      <Fragment>
        <StyledLink to="/admin/addbreed">Añadir raza</StyledLink>
        <StyledLink to="/admin/breedlist">Eliminar raza</StyledLink>
        <StyledLink to="/admin/logout">Cerrar sesión</StyledLink>
      </Fragment>
    )}
  </StyledWrapper>
);

Menu.defaultProps = {
  isAdmin: false,
};

Menu.propTypes = {
  isAdmin: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAdmin: state.user.isLogged,
});

export default connect(mapStateToProps)(Menu);
