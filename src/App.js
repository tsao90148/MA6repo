import React, { useState } from 'react';
import './App.css';

function Cell({ toggle, isOn }) {
  return (
    <div
      className="cell"
      style={{ backgroundColor: isOn ? 'black' : 'white' }}
      onClick={toggle}
    />
  );
}

function Grid() {
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = index => {
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
  };

  const countOnCells = cells.filter(isOn => isOn).length;

  return (
    <div className="App">
      <p>Cells on: {countOnCells}</p>
      <div className="grid">
        {cells.map((isOn, index) => (
          <Cell key={index} isOn={isOn} toggle={() => toggleCell(index)} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return <Grid />;
}

export default App;
