import './App.css';
import React from 'react';
import { Main } from './components/main';
import { GlobalProvider } from './components/context/globelContext';

function App() {
  return <div>
    <GlobalProvider >

<Main />

    </GlobalProvider>




  </div>
}

export default App;
