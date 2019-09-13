// ----
// Dependencies
import React from 'react';


// ----
// Child Component
import { StyledDisplay } from './styles/StyledDisplay';

// ----
// Display Component
const Display = ({ gameOver, text }) => {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    );
}


// ----
// Export Display Component
export default Display;
