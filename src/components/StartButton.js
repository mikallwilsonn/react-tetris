// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import { StyledStartButton } from './styles/StyledStartButton';


// ----
// StartButton Component
const StartButton = ({ callback }) => {
    return (
        <StyledStartButton onClick={callback}>
            Start Game
        </StyledStartButton>
    );
}


// ----
// Export StartButton Component
export default StartButton;
