import React from 'react'
import useHover from '../../hooks'
import './TileSelector.css'
import GameContext from '../../../refactor/GameContext'

const TileSelector = (props) => {

  const [ref, hovered] = useHover();

  <GameContext.Consumer>
  {
    ({numTiles, handleNumTileChange}) => {
      const dropdown = (
            <div className='tileSelectorContent' >
              <div className='number' onClick={() => handleNumTileChange(4)}>4</div>
              <div className='number' onClick={() => handleNumTileChange(16)}>16</div>
              <div className='number' onClick={() => handleNumTileChange(36)}>36</div>
            </div>
      )

      return (
        <div className='tileSelector'>
          <div>Number of Tiles</div>
          <div className='tileSelectorDropdown' ref={ref}>
            {props.numTiles}
            {hovered ? dropdown : null}
          </div>
        </div>
      )
    }
  }
  </GameContext.Consumer>
}

export default TileSelector
