import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AddBreed, BreedListAdmin, Logout, BreedList, Login } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const AdminRedirect = () => <Redirect to="/admin/addbreed" />;

const Content = () => (
  <StyledWrapper>
    <Route exact path="/admin" component={AdminRedirect} />
    <Route path="/admin/addbreed" component={AddBreed} />
    <Route path="/admin/breedlist" component={BreedListAdmin} />
    <Route path="/admin/logout" component={Logout} />
    <Route exact path="/" component={BreedList} />
    <Route exact path="/login" component={Login} />
  </StyledWrapper>
);

export default Content;
