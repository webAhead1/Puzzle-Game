import React from "react";
import ReactDOM from "react-dom";

export default function Board (props) {
    for (let j = 0; j < numOfRows; j++) {
        const columns = [];
  
        for (let i = 0; i < numOfColumns; i++) {
          const [randomX, randomY] = randomPositions[`${i}${j}`];
          columns.push(
            <Tile
              key={v4()}
              imageUrl={imageUrl}
              x={i}
              y={j}
              randomX={randomX}
              randomY={randomY}
            />
          );
        }
    }
    return (
        <div className="board">

        </div>
    );
}