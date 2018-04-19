import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';
import theme from '../../theme';

const stories = storiesOf('Button', module);

stories
  .add('Default', () => <Button theme={theme}>Button</Button>)
  .add('Primary', () => (
    <Button theme={theme} primary>
      Button
    </Button>
  ))
  .add('Secondary', () => (
    <Button theme={theme} secondary>
      Button
    </Button>
  ))
  .add('Transparent', () => (
    <Button theme={theme} transparent>
      Button
    </Button>
  ));
