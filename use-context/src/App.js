import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext.js';
import Limpar from './Limpar';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar/>
    </GlobalStorage>
  );
};

export default App;