import styled from 'styled-components';

export const SinglePokemonCard = ({ color, name, image, pokemon }) => {
	return (
		<SinglePokemonCardContainer color={color}>
			<TopSection>
				<LeftSideSection>
					<Image src={image} />
				</LeftSideSection>
				<RightSideSection>
						<Title>Background Info</Title>
					<DataCard>
						<p>Name: {pokemon.name} </p>
						<p>Number: {pokemon.number}</p>
						<p>Height: {pokemon.height}</p>
						<p>Weight: {pokemon.weight}hg</p>
					</DataCard>
				</RightSideSection>
			</TopSection>
			<button>Home</button>
		</SinglePokemonCardContainer>
	);
}

const SinglePokemonCardContainer = styled.div`
	background: ${(props) => props.color};
`;

export const Image = styled.img`
	height: 380px;
	justify-content: center;
	padding: 00px;
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
	justify-content: center;
	flex-direction: row;
`;

const RightSideSection = styled.div`
	position: relative;
	top: 80px;
	width: 100%;	
	/* background-color: blue; */
`;

const Title = styled.h3`
	color: white;

`

const DataCard = styled.div`
	display: column;
	margin-top: 10px;
	text-transform: capitalize;
	background-color: white;
	width: 140px;
`