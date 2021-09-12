import styled from "styled-components";

export const PokemonGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    
`;

export const PokemonCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    &:nth-child(even) {
        background: blue;
    }
    &:nth-child(odd) {
        background: red;
    }
    width: 25%;
    height: 10vh;
    text-transform: capitalize;
`;