// ----
// Dependencies
import React from 'react';

import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';


// ----
// Cell Component
const Cell = ({ type }) => {
    return (
        <StyledCell 
            type={type} 
            color={TETROMINOS[type].color} 
        >
        </StyledCell>
    );
}


// ----
// Export Cell Component
export default React.memo( Cell );
