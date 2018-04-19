import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

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

const App = ({
  dataList, addToList, handleDelete, isLogged,
}) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <Menu isLogged={isLogged} />
        </Header>
        <Content
          dataList={dataList}
          addToList={addToList}
          handleDelete={handleDelete}
          isLogged={isLogged}
        />
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

export default App;
