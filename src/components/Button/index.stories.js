import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Button from './';

const StyledWrapper = styled.div`
  padding: 80px;
`;

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.addDecorator(story => <StyledWrapper>{story()}</StyledWrapper>);

stories
  .add('Default', () => <Button>Button</Button>)
  .add('Primary', () => <Button primary>Button</Button>)
  .add('Secondary', () => <Button secondary>Button</Button>)
  .add('Transparent', () => <Button transparent>Button</Button>)
  .add('Payground', () => (
    <Button rounded={boolean('rounded', false)}>{text('children', 'Button')}</Button>
  ));
