import React, { useEffect, useState } from 'react';
import * as Components from '../components';
import { useHistory } from 'react-router';
import { getAllPokemon } from '../utils';
export const PokemonScreen = () => {
    
    const history = useHistory();
    const [pokemonList, setPokemonList] = useState([]);

    const loadPokemon = async() => {
        let data = await getAllPokemon();
        setPokemonList(data.results);
    }

    useEffect(() => {
        loadPokemon();
    }, []);

    const numbers = [5, 5, 3, 5, 3, 5];

    return (
        <Components.PageContainer>
            <Components.NavigationComponent color="red" title="Pokedex" />
            <Components.PokemonGrid>
            {pokemonList.map((pokemon, index) => {
              return (
            		<Components.PokemonCard onClick={(e) => {
						e.preventDefault();
						history.push('/pokemon', {
							url: pokemon.url
						});
					}}>
						<p>{pokemon.name}</p>
                	</Components.PokemonCard>
              );
            })}
            </Components.PokemonGrid>    
            {/* {numbers.map((num, index) => {
                return <p>{num}</p>;
            })} */}
        </Components.PageContainer>
    );
}


            
{/* <button onClick={(e) => {
    e.preventDefault();
    history.push('/pokemon');
}}>Pokemon!</button> */}