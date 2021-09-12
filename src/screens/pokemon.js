import React, { useEffect, useState } from 'react';
import * as Components from '../components';
import { useHistory } from 'react-router';
import { getAllPokemon } from '../utils';
export const PokemonScreen = () => {

    const history = useHistory();
    const [pokemonList, setPokemonList] = useState([]);

    const loadPokemon = async () => {
        let data = await getAllPokemon();
        setPokemonList(data.results);
    }

    useEffect(() => {
        loadPokemon();
    }, []);

    return (
        <Components.PageContainer>
            <Components.NavigationComponent home="home" color="red" title="Pokedex" image="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825731v7bl3.png" />

            <Components.PokemonGrid>
                {pokemonList.map((pokemon, index) => {
                    return (
                        <Components.PokemonCard onClick={(e) => {
                            e.preventDefault();
                            history.push('/pokemon', {
                                url: pokemon.url
                            });
                        }}>
                            <div>
                                <p>{pokemon.name}
                                    <img src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${pokemon.name}.png`} alt="not found" />
                                </p>
                                <p>{pokemon.count}</p>
                            </div>
                        </Components.PokemonCard>
                    );
                })}
            </Components.PokemonGrid>
        </Components.PageContainer >
    );
}

