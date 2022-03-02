import styled from 'styled-components';

export const NavigationComponent = ({ color, title, image, }) => {
    return (
        <NavigationBar color={color}>
            <Image src={image} />
            <NavigationBarHeader>{title}</NavigationBarHeader>
        </NavigationBar>
    );
}


export const NavigationBar = styled.nav`
    width: 100%;
    background: ${(props) => props.color} linear-gradient(to right, #1e0b88, #8f0d2d); 
    // background: #2b088a;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #1e0b88, #8f0d2d);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to right, #1e0b88, #8f0d2d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
    text-transform: capitalize;
    `;

export const Image = styled.img`
    height: 40px;
    margin-left: -5%;
    padding: 10px
`;