import React from 'react';
import GlobalStyle from  './styles/global' ;
import Layouts from './layouts'
import Routes from './routes'
function App() {
  return (
    <>
    <Layouts >
      <Routes/>
    </Layouts>
    <GlobalStyle />
    </>
  );
}

export default App;
