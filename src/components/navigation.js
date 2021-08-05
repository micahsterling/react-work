import styled from 'styled-components';

export const NavigationComponent = ({ color, title }) => {
    return (
        <NavigationBar color={color}>
            <NavigationBarHeader>{title}</NavigationBarHeader>
        </NavigationBar>
    );
}


export const NavigationBar = styled.nav`
    width: 100%;
    background: ${(props) => props.color};
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NavigationBarHeader = styled.h1`
    text-align: center;
    color: white;
    font-size: 2rem;
`;