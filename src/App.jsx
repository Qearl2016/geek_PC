import React, { useState } from 'react';
import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import ColorSettings from './components/ColorSettings';
import './styles/global.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('rgb(245, 245, 245)');

  return (
    <div className="app" style={{ backgroundColor }}>
      <Header />
      <main className="container">
        <ContentGrid />
      </main>
      <ColorSettings onColorChange={setBackgroundColor} />
    </div>
  );
};

export default App;
