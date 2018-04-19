import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { connect } from 'react-redux';

import { Header, Content, Menu } from './components';

import theme from '../theme';

injectGlobal`
  ${normalize()}
`;

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App = ({ isLogged }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <Menu isLogged={isLogged} />
        </Header>
        <Content isLogged={isLogged} />
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

App.defaultProps = {
  ...Content.defaultProps,
  isLogged: false,
};

App.propTypes = {
  ...Content.propTypes,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(App);
