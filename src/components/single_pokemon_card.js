import styled from 'styled-components';

export const SinglePokemonCard = ({ color, name, image, pokemon }) => {
	return (
		<SinglePokemonCardContainer color={color}>
			<TopSection>
				<LeftSideSection>
					<Image src={image} />
				</LeftSideSection>
				<RightSideSection>
					<div>

						<p>Backgournd Info</p>
						<p>Name: {pokemon.name} </p>
						<p>Number: {pokemon.number}</p>
						<p>Height: {pokemon.height}</p>
						<p>Weight: {pokemon.weight}hg</p>
						<p>Weight: {pokemon.image}hg</p>
					</div>
				</RightSideSection>

			</TopSection>

		</SinglePokemonCardContainer>
	);
}

const SinglePokemonCardContainer = styled.div`
	background: ${(props) => props.color};
`;

export const Image = styled.img`
    height: 380px;

`;

const TopSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: space-evenly;
	justify-content: center;
	position: relative;
	height: 375px;
	width: 100%;
`; // Side by Side

const LeftSideSection = styled.div`
	position: relative;
	width: 100%;
	`;
const RightSideSection = styled.div`
		position: relative;
		top: 80px;
		width: 100%;
		
	`;
