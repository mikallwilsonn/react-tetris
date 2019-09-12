// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


// ----
// Tetris Component
const Tetris = ({ callback }) => {
    return (
        <div>
            <Stage />

            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>

                <StartButton />
            </aside>
        </div>
    );
}


// ----
// Export Tetris Component
export default Tetris;
