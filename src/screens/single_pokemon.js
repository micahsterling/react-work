import React, { useEffect, useState } from 'react';
import * as Components from '../components';
import { useHistory } from 'react-router';
import { getPokemon } from '../utils';

export const SinglePokemonScreen = (props) => {

    const history = useHistory();
    const [pokemon, setPokemon] = useState({
        abilities: [],
        name: "",
        number: "",
        types: [],
        weight: "",
        moves: [],
        stats: [],
    });

    const loadPokemon = async (url) => {
        let data = await getPokemon(url);
        console.log("Data: ", data);
        setPokemon({
            ...pokemon,
            abilities: data.abilities,
            name: data.name,
            number: data.id,
            types: data.types,
            weight: data.weight,
            moves: data.moves,
            stats: data.stats,
        });
        console.log("Pokemon: ", pokemon);
        console.log("Abilities: ", pokemon.abilities);
        console.log("Name: ", pokemon.name);
        console.log("Number: ", pokemon.number);
        console.log("Types: ", pokemon.types);
        console.log("Weight: ", pokemon.weight);
        console.log("Moves: ", pokemon.moves);
        console.log("Stats: ", pokemon.stats);
    }

    useEffect(() => {
        loadPokemon(props.location.state.url);
    }, [])

    return (
        <Components.PageContainer>
            <Components.NavigationComponent color="blue" title={pokemon.name} />
            <img src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${pokemon.name}.png`} alt="not found" />
            <p>Name: {pokemon.name}</p>
            <p>Number: {pokemon.number}</p>
            <p>Weight: {pokemon.weight}hg</p>

            {pokemon.types.map((type) => {
                return (
                    <div>
                        <p>Type: {type.type.name}</p>

                    </div>
                )
            })}
            <p>Ability:</p>
            {pokemon.abilities.map((ability) => {
                return (
                    <div>
                        <p>{ability.ability.name}</p>
                        {/* <p>{ability.ability.url}</p> */}
                        {/* <p>Is Hidden: {ability.is_hidden}</p>
                        <p>Slot: {ability.slot}</p> */}
                    </div>
                )
            })}
            {pokemon.stats.map((stat) => {
                return (
                    <div>
                        <p>{stat.stat.name}: {stat.base_stat}</p>
                        <p></p>

                    </div>
                )
            })}
            {pokemon.moves.map((move) => {
                return (
                    <div>
                        <p>Move: {move.move.name}</p>

                    </div>
                )
            })}
        </Components.PageContainer>
    );
}

