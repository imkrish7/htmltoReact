import React from 'react';
import Header from './Views/Header';
import SideLeftMenu  from './Views/SideLeft';
import Content from './Views/Content';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideLeftMenu />
        <Content />
      </main>
    </div>
  );
}

export default App;
