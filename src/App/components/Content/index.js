import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AddBreed, BreedListAdmin, Logout, BreedList, Login } from '../../../scenes';

const Content = () => (
  <div>
    <Route exact path="/admin" component={() => <Redirect to="/admin/addbreed" />} />
    <Route path="/admin/addbreed" component={AddBreed} />
    <Route path="/admin/breedlist" component={BreedListAdmin} />
    <Route path="/admin/logout" component={Logout} />
    <Route exact path="/" component={BreedList} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Content;
