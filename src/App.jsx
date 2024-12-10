import React from 'react';
import './App.css';

function App() {
  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div style={{ height: '100vh',textAlign: 'center',paddingTop: '20%' }}>
      <button
        onClick={() => changeColor('red')}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Red
      </button>
      <button
        onClick={() => changeColor('blue')}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Blue
      </button>
      <button
        onClick={() => changeColor('green')}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Green
      </button>
      <button
        onClick={() => changeColor('purple')}
        style={{
          backgroundColor: 'purple',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Purple
      </button>
    </div>
  );
}

export default App;
