import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';

const stories = storiesOf('Button', module);

stories
  .add('Default', () => <Button>Button</Button>)
  .add('Primary', () => <Button primary>Button</Button>)
  .add('Secondary', () => <Button secondary>Button</Button>)
  .add('Transparent', () => <Button transparent>Button</Button>);
