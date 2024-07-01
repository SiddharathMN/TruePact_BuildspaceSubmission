import React, { useState } from "react";
import Grid from "./Components/Grid";
import ItemSelector from "./Components/ItemSelector";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [grid, setGrid] = useState(Array(4).fill(Array(4).fill(null)));

  const handleCellClick = (row, col) => {
    if (selectedItem) {
      const newGrid = grid.map((r, i) =>
        i === row ? r.map((cell, j) => (j === col ? selectedItem : cell)) : r
      );
      setGrid(newGrid);
    }
  };

  const optimizeShelf = () => {
    // Example priority-based reshuffling logic (implement your own logic here)
    const flatGrid = grid.flat();
    const prioritizedGrid = flatGrid.sort((a, b) => a?.priority - b?.priority);
    const newGrid = Array(4)
      .fill()
      .map((_, i) => prioritizedGrid.slice(i * 4, i * 4 + 4));
    setGrid(newGrid);
  };

  return (
    <div>
      <div id="top">
        <h1>Top-Shelf</h1>
      </div>
      <div id="main">
      <ItemSelector setSelectedItem={setSelectedItem} />     
      <Grid grid={grid} handleCellClick={handleCellClick} />
      <button onClick={optimizeShelf}>Optimize Shelf</button>
      </div>

      <p id="text">
        Hiiii !!
        Select items based on priority and then ..
        <br />click on the grid to place the items on the shelf
        <br />
        <br />
        click on the optimize shelf button to..
        <br />rearrange the items on the shelf based on priority
        <br /><br / >
        Also ily buildspace 😎😎 ..!! <br /> 
        Totally not trying to impress u guyzz ! <br />
      </p> 
    </div>
  );
};

export default App;
