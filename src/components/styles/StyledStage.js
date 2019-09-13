import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat( 
        ${props => props.width}, 1fr 
    );
    grid-gap: 1px;
    border: 2px solid #BB1520;
    border-radius: 5px;
    width: 100%;
    max-width: 25vw;
    background: #111;
    box-shadow: 0px 0px 25px 8px rgba( 0, 0, 0, 0.75 );
`;