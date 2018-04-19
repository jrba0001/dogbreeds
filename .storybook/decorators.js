import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { addDecorator } from '@storybook/react';

import theme from '../src/theme';

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

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
