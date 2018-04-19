import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { AddBreed, BreedListAdmin, Logout, BreedList, Login } from '../../../scenes';

const StyledWrapper = styled.div`
  padding: ${props => props.theme.space.md};
`;

const AdminRedirect = () => <Redirect to="/admin/addbreed" />;

const Content = ({
  dataAll, dataList, addToList, handleDelete,
}) => (
  <StyledWrapper>
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
