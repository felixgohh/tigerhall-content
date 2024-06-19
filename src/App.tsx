import React from 'react';
import Content from './components/Content';

function App() {
  return (
    <div className="w-[70%] py-[24px] mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-center mb-[14px]">
          TigerHall Content
        </h1>
      </header>
      <Content />
    </div>
  );
}

export default App;
