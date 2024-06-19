import React from 'react';
import Content from './components/Content';

function App() {
  return (
    <div className="w-[70%] py-6 mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-center mb-4">
          TigerHall Content
        </h1>
      </header>
      <Content />
    </div>
  );
}

export default App;
