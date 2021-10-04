import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  // #8 problem 
  const tilesArr = props.tiles.map((tile) => (<Tile tile={...tile}/>));

  return (
    <div className='Board' style={gridConfig}>
      {tilesArr}
    </div>
  )
}

export default Board
