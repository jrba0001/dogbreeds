import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AddBreed, BreedListAdmin, Logout, BreedList, Login } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const AdminRedirect = () => <Redirect to="/admin/addbreed" />;

const Content = ({
  isLogged, doLogin, doLogout, dataAll, dataList, addToList,
}) => (
  <StyledWrapper>
    <Route exact path="/admin" component={AdminRedirect} />
    <Route
      path="/admin/addbreed"
      component={() => <AddBreed dataAll={dataAll} dataList={dataList} addToList={addToList} />}
    />
    <Route path="/admin/breedlist" component={() => <BreedListAdmin data={dataList} />} />
    <Route
      path="/admin/logout"
      component={() => <Logout doLogout={doLogout} isLogged={isLogged} />}
    />
    <Route exact path="/" component={() => <BreedList data={dataList} />} />
    <Route exact path="/login" component={() => <Login doLogin={doLogin} isLogged={isLogged} />} />
  </StyledWrapper>
);

Content.defaultProps = {
  ...AddBreed.defaultProps,
  isLogged: false,
};

Content.propTypes = {
  ...AddBreed.propTypes,
  isLogged: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
};

export default Content;
