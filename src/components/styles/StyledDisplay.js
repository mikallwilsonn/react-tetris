import styled from 'styled-components';


export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #BB1520;
    min-height: 30px;
    width: 100%;
    border-radius: 5px;
    color: ${props => (props.gameOver ? '#BB1520' : '#DDD')};
    background: #000;
    font-family: Pixel, Arial, Helvetica;
    font-size: 0.8rem;
    box-shadow: 0px 0px 15px 8px rgba( 0, 0, 0, 0.5 );
`;