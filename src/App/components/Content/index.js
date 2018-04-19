import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AddBreed, BreedListAdmin, Logout, BreedList, Login } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const AdminRedirect = () => <Redirect to="/admin/addbreed" />;
const NoLoggedRedirect = () => <Redirect to="/" />;

const Content = ({
  dataAll, dataList, addToList, handleDelete, isLogged,
}) => (
  <StyledWrapper>
    {isLogged ? (
      <Fragment>
        <Route exact path="/admin" component={AdminRedirect} />
        <Route
          path="/admin/addbreed"
          component={() => <AddBreed dataAll={dataAll} dataList={dataList} addToList={addToList} />}
        />
        <Route
          path="/admin/breedlist"
          component={() => <BreedListAdmin data={dataList} handleDelete={handleDelete} />}
        />
        <Route path="/admin/logout" component={Logout} />
      </Fragment>
    ) : (
      <Route path="/admin" component={NoLoggedRedirect} />
    )}
    <Route exact path="/" component={() => <BreedList data={dataList} />} />
    <Route exact path="/login" component={Login} />
  </StyledWrapper>
);

Content.defaultProps = {
  ...AddBreed.defaultProps,
};

Content.propTypes = {
  ...AddBreed.propTypes,
};

export default Content;
