import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Content } from './components';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Content />
    </div>
  </BrowserRouter>
);

export default App;
