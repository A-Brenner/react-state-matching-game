import React from 'react';
import './Button.css';
import GameContext from '../../GameContext';

const Button = ({startgame, playing}) => (
    
    <GameContext.Consumer>
        {
            () => (
                <button onClick={startGame}>
                    {playing ? 'reset' : 'start'}
                </button>
            )
        }
    </GameContext.Consumer>
);

export default Button
