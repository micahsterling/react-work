import React, { useEffect, useState } from 'react';
import * as Components from '../components';
import { useHistory } from 'react-router';
import { getPokemon } from '../utils';

export const SinglePokemonScreen = (props) => {

    const history = useHistory();
    const [pokemon, setPokemon] = useState({
        abilities: [],
        name: "",
    });

    const loadPokemon = async (url) => {
        let data = await getPokemon(url);
        console.log("Data: ", data);
        setPokemon({
            ...pokemon,
            abilities: data.abilities,
            name: data.name
        });
        console.log("Pokemon: ", pokemon);
        console.log("Abilities: ", pokemon.abilities);
        console.log("Name: ", pokemon.name);
    }

    useEffect(() => {
        loadPokemon(props.location.state.url);
    }, [])

    return (
        <Components.PageContainer>
            <Components.NavigationComponent color="blue" title={pokemon.name} />
            <p>Name: {pokemon.name}</p>

            {pokemon.abilities.map((ability) => {
                return (
                    <div>
                        <p>{ability.ability.name}</p>
                        <p>{ability.ability.url}</p>
                        <p>Is Hidden: {ability.is_hidden}</p>
                        <p>Slot: {ability.slot}</p>
                    </div>
                )
            })}
        </Components.PageContainer>
    );
}

