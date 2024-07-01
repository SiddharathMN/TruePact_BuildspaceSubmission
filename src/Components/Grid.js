import React from "react";

const Grid = ({ grid, handleCellClick }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 100px)" }}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: cell ? "#f0f0f0" : "white",
            }}
          >
            {cell?.name || ""}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;