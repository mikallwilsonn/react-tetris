// ----
// Dependencies
import React from 'react';


// ----
// Child Components
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';


// ----
// Stage Component
const Stage = ({ stage }) => {
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            { 
                stage.map( row => 
                    row.map(( cell, x ) => 
                        <Cell key={x} type={cell[0]} /> 
                    )
                )
            }
        </StyledStage>
    );
}


// ----
// Export Stage Component
export default Stage;
